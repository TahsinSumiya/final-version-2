const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  layoutId: { type: mongoose.Schema.Types.ObjectId, ref: 'Layout' },
  id: String,
  text: String,
  name: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});



module.exports = mongoose.model("Comment", CommentSchema);
