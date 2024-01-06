const router = require("express").Router();
const pool = require("../db");

router.post("/register", async (req,res) => {
    try{
        
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1",
        [email]);

        // user already exists
        if (user.rows.length !==0 ) {
            return res.status(401);
        }

        res.json(user.rows);


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

module.exports = router;