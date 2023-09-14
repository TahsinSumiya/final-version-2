const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
 
  name: {
    type: String,
    unique: true, // Ensure unique category names
    
  },
 image:{
  type: String,
 }

  }
 );
  categorySchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
  });
  module.exports = mongoose.model('Category', categorySchema)
 