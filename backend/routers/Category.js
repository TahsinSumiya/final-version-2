const express = require("express");
const router = express.Router();
const Category = require('../models/Category')

router.post("/", async (req, res) => {
    const categoryName = req.body.name;

  try {
    const existingCategory = await Category.findOne({ name: categoryName.toLowerCase() });
    if (existingCategory) {
      return res.status(400).json({ error: 'Category already exists.' });
    }

    const newCategory = new Category({ name: categoryName });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category.' });
  }
  });





  router.get("/getcategories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
      } catch (error) {
        res.status(500).json({ error: 'Unable to fetch categories' });
      }

  
  });











module.exports = router;