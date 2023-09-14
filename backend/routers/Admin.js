

const AdminDb = require("../models/Adminauth")
const express = require("express");
const router = express.Router();
require("dotenv").config();
require 
router.post("/login", async (req, res) => {
    try {
        const { id, password } = req.body;
    
      // Manually check if username and password match in the database or any other authentication logic
      const validCredentials = checkCredentials(id, password);
               
      if (validCredentials) {

        // res.status(200).json({id, password})
        res.status(200).json({status:201,id,password})
        // res.sendStatus(200);
      } else {

        res.status(401).json({status:401,message:"error"})
    
      }
      } catch (error) {
        console.error(error);
      }
        })
        
        function checkCredentials(id, password) {
            // Manually compare the username and password with the expected values in the database
            const expectedUsername = process.env.ADMIN_ID;
            const expectedPassword = process.env.ADMIN_PASS;
          
            return id === expectedUsername && password === expectedPassword;
    };





module.exports = router;