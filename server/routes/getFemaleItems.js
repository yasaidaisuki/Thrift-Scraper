const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req,res) => {
    try{
       
        const { brand, name, price, img, seller } = req.body;

        const items = await pool.query("SELECT * FROM femaleItems");
        return res.json(items);

    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;