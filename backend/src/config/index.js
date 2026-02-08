/**
 * Application Configuration
 * Centralized config from environment variables
 */

require('dotenv').config();

const config = {
  // Server
  port: parseInt(process.env.PORT, 10) || 5000,
  host: process.env.HOST || '0.0.0.0', // Bind to all interfaces for EC2
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // API
  apiVersion: process.env.API_VERSION || 'v1',
  
  // CORS
  corsOrigins: process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
    : ['http://localhost:3000', 'http://localhost:3001'],
  
  // Rate Limiting
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
  
  // Feature flags
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};

// Validate required config in production
const validateConfig = () => {
  const required = ['DATABASE_URL'];
  const missing = [];

  if (config.isProduction) {
    required.forEach(key => {
      if (!process.env[key]) {
        missing.push(key);
      }
    });

    if (missing.length > 0) {
      console.error(`❌ Missing required environment variables: ${missing.join(', ')}`);
      process.exit(1);
    }
  }
};

module.exports = { config, validateConfig };
