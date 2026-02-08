/**
 * PM2 Ecosystem Configuration
 * 
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 stop agriscope-api
 *   pm2 restart agriscope-api
 *   pm2 logs agriscope-api
 *   pm2 monit
 */

module.exports = {
  apps: [
    {
      name: 'agriscope-api',
      script: './src/server.js',
      
      // Environment
      env: {
        NODE_ENV: 'development',
        PORT: 5000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000,
      },

      // Cluster mode - use all CPU cores
      instances: 'max',        // Or set specific number: 2, 4, etc.
      exec_mode: 'cluster',

      // Auto-restart
      autorestart: true,
      watch: false,            // Set to true for dev, false for production
      max_memory_restart: '1G',

      // Logs
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,

      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,

      // Restart policy
      exp_backoff_restart_delay: 100,
      max_restarts: 10,
      min_uptime: '10s',
    },
  ],
};
