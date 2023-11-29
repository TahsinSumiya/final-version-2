const layout = require("../models/Layout")
const AdminDb = require("../models/Adminauth")
const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require('jsonwebtoken');

router.post("/login", async (req, res) => {
  try {
    const { id, password } = req.body;

    // Manually check if username and password match in the database or any other authentication logic
    const validCredentials = checkCredentials(id, password);

    if (validCredentials) {
      // Generate a JWT token
      const token = jwt.sign({ id, username: id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Send the token in the response
      res.status(200).json({ status: 201, token });
    } else {
      res.status(401).json({ status: 401, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
});

        router.get("/", async (req, res) => {
          try {
           
            const Layout = await layout.find({ id:'' });
            res.json(Layout);
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
          }
            
            
        });     
        function checkCredentials(id, password) {
            // Manually compare the username and password with the expected values in the database
            const expectedUsername = process.env.ADMIN_ID;
            const expectedPassword = process.env.ADMIN_PASS;
          
            return id === expectedUsername && password === expectedPassword;
    };





module.exports = router;