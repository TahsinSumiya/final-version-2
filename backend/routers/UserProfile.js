const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const multer = require('multer');
var admin = require("firebase-admin");
const QuestionDB = require("../models/Question");
var serviceAccount = require("../ServiceAccountKey.json");
const UserDb = require("../models/UserProfile")
const path = require('path');
const fs = require('fs');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devcommunity-621e5-default-rtdb.firebaseio.com/"
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }

})


const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })

router.post("/profile", upload.single('image'), async (req, res) => {
  try {
    const { linkedin, github, uuid, name, user, category, email, desc ,goals} = req.body;
    const image = req.file.filename;


    const userData = new UserDb({
      linkedin,
      github,
      uuid,
      name,
      user,
      category,
      email,
      desc,
      image,
      goals

    });

 
    const savedUser = await userData.save();


    res.status(201).send(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({
      message: "User not added successfully",
    });
  }
});

  // Define an update profile route
  router.put("/profile/:uuid", upload.single('image'), async (req, res) => {
    try {
      const { linkedin, github, uuid, name, user, category, email, desc ,goals} = req.body;
      const image = req.file.filename;
  
      // Update the user profile directly without creating a new instance
      const updatedUser = await UserDb.findOneAndUpdate(
        { uuid },
        {
          $set: {
            linkedin,
            github,
            name,
            user,
            category,
            email,
            desc,
            image,
            goals
          },
        },
        { new: true, upsert: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating/creating user profile:', error);
      res.status(500).json({ error: "Unable to update/create user profile" });
    }
  });
  
  
  router.get("/getuserpofile/:uuid", async (req, res) => {
    try {
      const { uuid } = req.params;
      const user = await UserDb.findOne({ uuid });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Unable to fetch user" });
    }
  });
  
router.get('/postbyid/:uuid', async (req, res) => {
    try {
      const uuid = req.params.uuid;
      const userPosts = await QuestionDB.find({ uuid });
      res.json(userPosts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
router.get("/getfirebaseAllUsers", async (req, res) => {
  try {
    const userRecords = await admin.auth().listUsers();
    const users = userRecords.users.map((userRecord) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      // Add more user properties as needed
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ error: "Unable to retrieve users" });
  }
});

// router.get("/searchusers/:query", async (req, res) => {
//     const searchQuery = req.params.query.toLowerCase(); // Get the search query from the URL
//     try {
//       const userRecords = await admin.auth().listUsers();
    
//       // Filter users based on the search query
//       const filteredUsers = userRecords.users.filter((userRecord) => {
//         const name = userRecord.displayName || ""; // Use an empty string if displayName is undefined
//         const email = userRecord.email || ""; // Use an empty string if email is undefined
    
//         return name.toLowerCase().includes(searchQuery) || email.toLowerCase().includes(searchQuery);
//       });
    
//       const users = filteredUsers.map((userRecord) => ({
//         uid: userRecord.uid,
//         email: userRecord.email || "", // Use an empty string if email is undefined
//         displayName: userRecord.displayName || "", // Use an empty string if displayName is undefined
//         // Add more user properties as needed
//       }));
    
//       res.status(200).json(users);
//     } catch (error) {
//       console.error("Error searching users:", error);
//       res.status(500).json({ error: "Unable to search for users" });
//     }
    
     
//   });

  router.get("/getuser", async (req, res) => {

    try {
      const getuser = await UserDb.find();
      res.json(getuser);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch categories' });
    }
  });

module.exports = router;