const router = require("express").Router();
const pool = require("../db");

router.post("/", async(req,res)=>{
    const {item, gender} = req.body;
    try{
        
        const userResult = (gender === "men") ? await pool.query('SELECT * FROM maleitems WHERE NAME LIKE $1',["%"+item+"%"]) : 
        await pool.query('SELECT * FROM femaleitems WHERE NAME LIKE $1',["%"+item+"%"]);

        return res.json(userResult);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;