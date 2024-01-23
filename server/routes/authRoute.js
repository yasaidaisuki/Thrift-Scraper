const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");
const jwtGenerator = require("../utils/jwtGenerator");

router.get("/", authorization, async(req,res)=>{
    try{
        res.json(true);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;