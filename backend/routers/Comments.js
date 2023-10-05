const express = require("express");
const router = express.Router();

const commentDB = require("../models/Comment");

router.post("/comments/:layoutId", async (req, res) => {
  const { text,user,name} = req.body;
    const layoutId = req.params.layoutId;
   
    
    try {
      const newComment = new commentDB({ text,layoutId,user,name});
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: 'Could not create comment' });
    }
});
router.get("/getcomments/:layoutId", async (req, res) => {
  try {
    const comments = await commentDB.find({ layoutId: req.params.layoutId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }

});

module.exports = router;