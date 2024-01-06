const router = require("express").Router();
const express = require('express');
const pool = require('../db');

router.post("/register", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // does user email already exist
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]);

      
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;