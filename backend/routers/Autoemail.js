const express = require("express");
const transporter = require('../config/emailconfig')
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');
require("dotenv").config();
require 
const router = express.Router();
// // const mongoose = require('mongoose')
// const EMAIL_SERVICE_ID = process.env.EMAIL_SERVICE_ID;
// const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
// const EMAIL_USER_ID = 'YOUR_EMAIL_USER_ID';
const authenticateToken = require('../config/token')
router.post('/', (req, res) => {
    const { userEmail, message } = req.body;
    const mailOptions = {
        from:process.env.EMAIL,
        to:userEmail,
        subject:"Layout Deleted",
        text:`your layout has been deleted due to some issues by admin`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log("error",error);
            res.status(401).json({status:401,message:"email not send"})
        }else{
            console.log("Email sent",info.response);
            res.status(201).json({status:201,message:"Email sent Succsfully"})
        }
    })
  });
  







module.exports = router;