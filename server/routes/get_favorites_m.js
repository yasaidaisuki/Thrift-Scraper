const router = require("express").Router();
const pool = require("../db");

router.post('/', async (req, res) => {
    try {
        const {user_id} = req.body;
        // Fetch all product_ids favorited by the user
       const items = await pool.query(
            "select * from (select *\
             from maleitems inner join favorite_male on \
             maleitems.product_id = favorite_male.product_id) as query\
             where user_id = $1",
            [user_id]
        );


        return res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;