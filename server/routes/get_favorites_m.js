const router = require("express").Router();
const pool = require("../db");

router.post('/', async (req, res) => {
    const { user_id } = req.body;
  
    try {
        // Fetch all product_ids favorited by the user
        const favoriteItems = await pool.query(
            "SELECT product_id FROM favorite_male WHERE user_id = $1",
            [user_id]
        );

        // Extract product_ids from the result
        const favoriteProductIds = favoriteItems.rows.map(item => item.product_id);

        // Fetch all maleItems that match the favorited product_ids
        const items = await pool.query(
            "SELECT * FROM maleItems WHERE product_id IN ($1)",
            [favoriteProductIds]
        );

        return res.json(items.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;