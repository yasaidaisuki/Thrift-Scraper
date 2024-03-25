const router = require("express").Router();
const pool = require("../db");

router.post('/', async (req, res) => {
    const { user_id, product_id } = req.body;
  
    // Check if student and course exist
    try {
      const userResult = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
      const itemResult = await pool.query('SELECT * FROM femaleItems WHERE product_id = $1', [product_id]);
  
      if (userResult.rows.length === 0 || itemResult.rows.length === 0) {
        return res.status(404).json({ success: false, message: 'User or Item not found' });
      }
  
      // Create relationship
      await pool.query('INSERT INTO favorite_female (user_id, product_id) VALUES ($1, $2)', [user_id, product_id]);
      return res.json({ success: true, message: 'Favorite successful' });
    } catch (error) {
      console.error('Error executing SQL query:', error.message);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

module.exports = router;