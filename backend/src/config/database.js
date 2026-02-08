/**
 * Database Configuration
 * Uses DATABASE_URL environment variable for production deployments
 */

const { Pool } = require('pg');

// Parse DATABASE_URL or use individual config
const getDatabaseConfig = () => {
  // Prefer DATABASE_URL (standard for cloud deployments)
  if (process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' 
        ? { rejectUnauthorized: false } 
        : false,
    };
  }

  // Fallback to individual environment variables
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'agriscope',
    ssl: process.env.NODE_ENV === 'production' 
      ? { rejectUnauthorized: false } 
      : false,
  };
};

// Create connection pool
const pool = new Pool({
  ...getDatabaseConfig(),
  max: 20,                      // Maximum connections in pool
  idleTimeoutMillis: 30000,     // Close idle connections after 30s
  connectionTimeoutMillis: 5000, // Timeout after 5s if can't connect
});

// Test database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
};

// Query helper
const query = async (text, params) => {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('Query executed', { text: text.substring(0, 50), duration: `${duration}ms`, rows: result.rowCount });
    }
    
    return result;
  } catch (error) {
    console.error('Query error:', error.message);
    throw error;
  }
};

// Graceful shutdown
const closePool = async () => {
  await pool.end();
  console.log('Database pool closed');
};

module.exports = {
  pool,
  query,
  testConnection,
  closePool,
};
