const mongoose = require('mongoose');

const layoutSchema = new mongoose.Schema({
  html: {
    type: String,
   
  },
 css: {
    type: String,
    
  },
  js: {
    type: String,
    
  },
  author: {
    type: Object,
    
  },
  id:{
    type:Object,
  },
  publish:{
    
     type : Date,
      default: Date.now 
    
  },
  email:String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
  
    ref: 'Category',
    
  },
  tags: [],

//   comments: [{
//     text: { type: String },
//     comments: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
// }],



 
});

module.exports = mongoose.model('Layout', layoutSchema);