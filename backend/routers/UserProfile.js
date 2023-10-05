const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");
const QuestionDB = require("../models/Question");
var serviceAccount = require("../ServiceAccountKey.json");
const UserDb = require("../models/UserProfile")

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://final-c4f40-default-rtdb.firebaseio.com"
// });

router.post("/profile", async (req, res) => {
    const userData = new UserDb({
        linkedin: req.body.linkedin,
        github: req.body.github,
        birthdate: new Date(req.body.birthdate).toISOString().split('T')[0],
        uuid: req.body.uuid,
        name: req.body.name,
      user: req.body.user,
      category:req.body.category,
      email:req.body.email,
      desc:req.body.desc
    });
  
    await userData
      .save()
      .then((doc) => {
        res.status(201).send(doc);
      })
      .catch((err) => {
        res.status(400).send({
          message: "Question not added successfully",
        });
      });
  });
  // Define an update profile route
router.put("/profile/:uuid", async (req, res) => {
    try {
      const { uuid } = req.params;
      const updatedData = {
        linkedin: req.body.linkedin,
        github: req.body.github,
        category:req.body.category,
        email:req.body.email,
        desc:req.body.desc
        // Add more fields to update as needed
      };
  
      // Find the user by UUID and update their profile data
      const updatedUser = await UserDb.findOneAndUpdate(
        { uuid },
        updatedData,
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ error: "Unable to update user profile" });
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
// router.get("/getfirebaseAllUsers", async (req, res) => {
//   try {
//     const userRecords = await admin.auth().listUsers();
//     const users = userRecords.users.map((userRecord) => ({
//       uid: userRecord.uid,
//       email: userRecord.email,
//       displayName: userRecord.displayName,
//       // Add more user properties as needed
//     }));
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error listing users:", error);
//     res.status(500).json({ error: "Unable to retrieve users" });
//   }
// });

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