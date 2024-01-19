const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
}

router.post("/", async (req,res) => {
    
    try{

        const { email, password } = req.body;
        console.log(email)
        const user = await pool.query("SELECT * FROM users WHERE email = $1",
        [email]);

        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }

        // user already exists

        // hashing password
        const saltRounds = 10;

        // await b/c it takes time for hashing // 

        const hashed_password = await bcrypt.hash(password,saltRounds);

        // inserting into db
        const newUser = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, hashed_password]);

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({token});


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

module.exports = router;