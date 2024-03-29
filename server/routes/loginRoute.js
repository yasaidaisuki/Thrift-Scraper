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

        const user = await pool.query("SELECT password FROM users WHERE email = $1",
        [email]);

        if (![email, password].every(Boolean)) {
            return res.json("Missing Credentials");
          } else if (!validEmail(email)) {
            return res.json("Invalid Email");
          }

        // user dne
        if (user.rows.length === 0 ) {
            return res.status(401).send("Incorrect Login Credentials");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
            
        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }
        const token = jwtGenerator(user.rows[0].user_id);

        return res.json ({token});


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

module.exports = router;