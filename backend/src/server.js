/**
 * AgriScope API Server
 * Production-ready Express server for AWS EC2 deployment
 */

// Load environment variables FIRST
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { config, validateConfig } = require('./config');
const { testConnection, closePool } = require('./config/database');
const routes = require('./routes');

// Validate config before starting
validateConfig();

// Initialize Express
const app = express();

// ===========================================
// Middleware
// ===========================================

// Security headers
app.use(helmet());

// CORS - Allow configured origins
app.use(cors({
  origin: config.corsOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Request logging
app.use(morgan(config.isProduction ? 'combined' : 'dev'));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ===========================================
// Health Check (for load balancers / monitoring)
// ===========================================

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.nodeEnv,
  });
});

// ===========================================
// API Routes
// ===========================================

app.use(`/api/${config.apiVersion}`, routes);

// ===========================================
// Error Handling
// ===========================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  res.status(err.status || 500).json({
    error: config.isProduction ? 'Internal Server Error' : err.message,
    ...(config.isDevelopment && { stack: err.stack }),
  });
});

// ===========================================
// Server Startup
// ===========================================

const startServer = async () => {
  // Test database connection
  const dbConnected = await testConnection();
  
  if (!dbConnected && config.isProduction) {
    console.error('❌ Cannot start server without database connection');
    process.exit(1);
  }

  // Start listening on 0.0.0.0 (all interfaces) for EC2
  const server = app.listen(config.port, config.host, () => {
    console.log('');
    console.log('🌾 ================================');
    console.log('   AgriScope API Server');
    console.log('🌾 ================================');
    console.log(`   Environment: ${config.nodeEnv}`);
    console.log(`   Host:        ${config.host}`);
    console.log(`   Port:        ${config.port}`);
    console.log(`   API Version: ${config.apiVersion}`);
    console.log(`   Health:      http://${config.host}:${config.port}/health`);
    console.log('🌾 ================================');
    console.log('');
  });

  // ===========================================
  // Graceful Shutdown
  // ===========================================
  
  const shutdown = async (signal) => {
    console.log(`\n${signal} received. Shutting down gracefully...`);
    
    server.close(async () => {
      console.log('HTTP server closed');
      await closePool();
      console.log('Database connections closed');
      process.exit(0);
    });

    // Force shutdown after 30 seconds
    setTimeout(() => {
      console.error('Forced shutdown after timeout');
      process.exit(1);
    }, 30000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
};

// Start the server
startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
