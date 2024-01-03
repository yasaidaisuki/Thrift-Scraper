const express = require('express');
const pool = require('../db');
const router = express.Router();
// hashing password
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!password) {
        return res.status(400).json({error: "password is required"});
      }

      // Hash the password (use a proper password hashing library)
      const hashedPassword = await hashPassword(password);
  
      // Insert the user into the database
      const result = await pool.query(
        'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *',
        [username, email, hashedPassword]
      );
  
      // Return the registered user details
      const registeredUser = result.rows[0];
      res.status(201).json({
        user_id: registeredUser.user_id,
        email: registeredUser.email,
        created_at: registeredUser.created_at,
      });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Hashing password function (use a proper library like bcrypt in a real application)
  async function hashPassword(password) {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }
  
  module.exports = router;