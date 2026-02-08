/**
 * Demand API Routes
 * Endpoints for buyer demand data
 */

const express = require('express');
const router = express.Router();
const { query } = require('../config/database');

// GET /api/v1/demand - Get all demand entries
router.get('/', async (req, res, next) => {
  try {
    // TODO: Replace with actual database query
    // const result = await query('SELECT * FROM demand ORDER BY created_at DESC');
    
    // Mock data for now
    const demands = [
      { crop: 'Wheat', totalQuantity: 500, avgPrice: 2200, buyers: 12 },
      { crop: 'Rice', totalQuantity: 350, avgPrice: 3800, buyers: 8 },
      { crop: 'Tomato', totalQuantity: 200, avgPrice: 1750, buyers: 15 },
      { crop: 'Onion', totalQuantity: 450, avgPrice: 1450, buyers: 20 },
    ];

    res.json({
      success: true,
      count: demands.length,
      data: demands,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/demand - Submit new demand
router.post('/', async (req, res, next) => {
  try {
    const { buyerName, crop, quantity, expectedPrice, location, contact, notes } = req.body;

    // Validation
    if (!buyerName || !crop || !quantity || !expectedPrice || !location || !contact) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['buyerName', 'crop', 'quantity', 'expectedPrice', 'location', 'contact'],
      });
    }

    // TODO: Replace with actual database insert
    // const result = await query(
    //   'INSERT INTO demand (buyer_name, crop, quantity, expected_price, location, contact, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    //   [buyerName, crop, quantity, expectedPrice, location, contact, notes]
    // );

    res.status(201).json({
      success: true,
      message: 'Demand submitted successfully',
      data: {
        id: Date.now(),
        buyerName,
        crop,
        quantity,
        expectedPrice,
        location,
        contact,
        notes,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
