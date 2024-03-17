const router = require("express").Router();
const pool = require("../db");


router.get("/", async(req,res)=>{
    try{
        


    } catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;