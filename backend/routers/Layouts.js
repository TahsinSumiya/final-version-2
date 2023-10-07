const express = require("express");
const router = express.Router();
const layout = require('../models/Layout')
router.post("/layoutUploader", async (req, res) => {

    try {
        const {  categoryId,html,css,js, publish,author,id ,email,tags} = req.body;
        const product = new layout({ html,css,js, publish,author, categoryId,id,email,tags});
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

  router.get("/getalllayouts", async (req, res) => {
    try {
     
      const Layout = await layout.find();
      res.json(Layout);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
      
      
  });
  router.delete('/:id', async (req, res) => {
    try {
      const layoutId = req.params.id;
      const deletedLayout = await layout.findByIdAndDelete(layoutId);
  
      if (!deletedLayout) {
        return res.status(404).json({ success: false, message: 'Layout not found' });
      }
  
      return res.status(200).json({ success: true, message: 'Layout deleted successfully' });
    } catch (error) {
      console.error('Error deleting layout:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

 





module.exports = router;