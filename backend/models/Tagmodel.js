const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: [],
    required: true,
  },
  // Add more fields if necessary
});

const TagModel = mongoose.model('Tag', tagSchema);

module.exports = TagModel;
