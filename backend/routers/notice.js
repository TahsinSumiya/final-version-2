const express = require("express");
const router = express.Router();
const Notice = require('../models/notice')
router.post("/postnotice", async (req, res) => {
    const {notice,name} = req.body;

    try {
      const req = new Notice({notice,name});
      await req.save();
      res.status(201).json(req);
    } catch (error) {
      res.status(500).json({ error: 'Could not create request' });
    }
  });

  router.get("/getnotice", async (req, res) => {
    try {
        const req = await Notice.find();
        res.json(req);
      } catch (error) {
        res.status(500).json({ error: 'Unable to fetch categories' });
      }

  
  });
  router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedreq = await Notice.findByIdAndDelete(id);
  
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