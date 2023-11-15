const mongoose = require('mongoose')
const Schema = mongoose.Schema
const requestSchema = new Schema({
 
  request: {
    type: String,
    
  },
  id: {
    type: String,
    
  },
  name: {
    type: String,
    
  },

  }
 );

  module.exports = mongoose.model('Request', requestSchema)
 