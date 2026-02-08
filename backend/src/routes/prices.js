/**
 * Prices API Routes
 * Endpoints for mandi price data
 */

const express = require('express');
const router = express.Router();
const { query } = require('../config/database');

// GET /api/v1/prices - Get all prices
router.get('/', async (req, res, next) => {
  try {
    // TODO: Replace with actual database query
    // const result = await query('SELECT * FROM prices ORDER BY updated_at DESC');
    
    // Mock data for now
    const prices = [
      { id: 1, crop: 'Wheat', variety: 'Sharbati', location: 'Azadpur, Delhi', minPrice: 2100, maxPrice: 2350, modalPrice: 2250, unit: 'Quintal', updatedAt: new Date().toISOString() },
      { id: 2, crop: 'Rice', variety: 'Basmati', location: 'Karnal, Haryana', minPrice: 3600, maxPrice: 4100, modalPrice: 3850, unit: 'Quintal', updatedAt: new Date().toISOString() },
      { id: 3, crop: 'Tomato', variety: 'Hybrid', location: 'Vashi, Maharashtra', minPrice: 1500, maxPrice: 2100, modalPrice: 1800, unit: 'Quintal', updatedAt: new Date().toISOString() },
      { id: 4, crop: 'Onion', variety: 'Red', location: 'Lasalgaon, Maharashtra', minPrice: 1200, maxPrice: 1800, modalPrice: 1500, unit: 'Quintal', updatedAt: new Date().toISOString() },
      { id: 5, crop: 'Potato', variety: 'Jyoti', location: 'Agra, UP', minPrice: 800, maxPrice: 1200, modalPrice: 1000, unit: 'Quintal', updatedAt: new Date().toISOString() },
    ];

    res.json({
      success: true,
      count: prices.length,
      data: prices,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/v1/prices/:id - Get single price
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // TODO: Replace with actual database query
    // const result = await query('SELECT * FROM prices WHERE id = $1', [id]);
    
    res.json({
      success: true,
      data: {
        id: parseInt(id),
        crop: 'Wheat',
        variety: 'Sharbati',
        location: 'Azadpur, Delhi',
        minPrice: 2100,
        maxPrice: 2350,
        modalPrice: 2250,
        unit: 'Quintal',
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
