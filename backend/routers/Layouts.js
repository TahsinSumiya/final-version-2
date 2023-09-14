const express = require("express");
const router = express.Router();
const layout = require('../models/Layout')
router.post("/layoutUploader", async (req, res) => {

    try {
        const {  categoryId,html,css,js, publish,author,id } = req.body;
        const product = new layout({ html,css,js, publish,author, categoryId,id});
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
  });

  router.get("/getlayouts/:categoryId", async (req, res) => {

    try {
        const layouts = await layout.find({ categoryId: req.params.categoryId });
        res.json(layouts);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
      
      
  });


  router.get("/getlayoutsbyId/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const Layout = await layout.find({ id });
      res.json(Layout);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
      
      
  });

 





module.exports = router;