/**
 * API Routes
 * Central router that combines all route modules
 */

const express = require('express');
const router = express.Router();

const pricesRoutes = require('./prices');
const demandRoutes = require('./demand');
const alertsRoutes = require('./alerts');

// Mount routes
router.use('/prices', pricesRoutes);
router.use('/demand', demandRoutes);
router.use('/alerts', alertsRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    name: 'AgriScope API',
    version: 'v1',
    endpoints: {
      prices: '/api/v1/prices',
      demand: '/api/v1/demand',
      alerts: '/api/v1/alerts',
    },
    documentation: 'https://github.com/your-repo/agriscope#api',
  });
});

module.exports = router;
