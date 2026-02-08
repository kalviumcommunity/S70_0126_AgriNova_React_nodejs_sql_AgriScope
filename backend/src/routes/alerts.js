/**
 * Alerts API Routes
 * Endpoints for price and demand alerts
 */

const express = require('express');
const router = express.Router();
const { query } = require('../config/database');

// GET /api/v1/alerts - Get all alerts
router.get('/', async (req, res, next) => {
  try {
    // TODO: Replace with actual database query
    // const result = await query('SELECT * FROM alerts ORDER BY timestamp DESC');
    
    // Mock data for now
    const alerts = [
      {
        id: 1,
        type: 'price_rise',
        message: 'Tomato prices increased significantly in Vashi mandi',
        crop: 'Tomato',
        location: 'Vashi, Maharashtra',
        percentage: 8.5,
        timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
        isRead: false,
      },
      {
        id: 2,
        type: 'demand_spike',
        message: 'High buyer demand for Onion detected in Maharashtra region',
        crop: 'Onion',
        location: 'Lasalgaon, Maharashtra',
        timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
        isRead: false,
      },
      {
        id: 3,
        type: 'price_drop',
        message: 'Rice prices have dropped in Karnal mandi',
        crop: 'Rice',
        location: 'Karnal, Haryana',
        percentage: -1.2,
        timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
        isRead: true,
      },
      {
        id: 4,
        type: 'price_rise',
        message: 'Wheat prices rising across Uttar Pradesh mandis',
        crop: 'Wheat',
        location: 'Multiple mandis, UP',
        percentage: 3.5,
        timestamp: new Date(Date.now() - 2 * 60 * 60000).toISOString(),
        isRead: true,
      },
    ];

    res.json({
      success: true,
      count: alerts.length,
      unreadCount: alerts.filter(a => !a.isRead).length,
      data: alerts,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
});

// PATCH /api/v1/alerts/:id/read - Mark alert as read
router.patch('/:id/read', async (req, res, next) => {
  try {
    const { id } = req.params;

    // TODO: Replace with actual database update
    // await query('UPDATE alerts SET is_read = true WHERE id = $1', [id]);

    res.json({
      success: true,
      message: `Alert ${id} marked as read`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
