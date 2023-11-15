const express = require("express");
const router = express.Router();
const Request = require('../models/request')
router.post("/req", async (req, res) => {
    const { request,id,name} = req.body;
 
   
    
    try {
      const req = new Request({request,id,name});
      await req.save();
      res.status(201).json(req);
    } catch (error) {
      res.status(500).json({ error: 'Could not create request' });
    }
  });

  router.get("/getreq", async (req, res) => {
    try {
        const req = await Request.find();
        res.json(req);
      } catch (error) {
        res.status(500).json({ error: 'Unable to fetch categories' });
      }

  
  });
  router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedreq = await Request.findByIdAndDelete(id);
  
      if (!deletedreq) {
        return res.status(404).json({ success: false, message: ' not found' });
      }
  
      return res.status(200).json({ success: true, message: 'deleted successfully' });
    } catch (error) {
      console.error('Error deleting layout:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
module.exports = router;