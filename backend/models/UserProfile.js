const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  linkedin: String,
  github: String,
  birthdate:String,
  uuid:String,
  user: Object,
  name:String,
  email:String,
  desc:String,
  category:String

  // email: {
  //   type: String,
  //   required: function () {
  //     // This function determines whether the email field is required based on the selected category.
  //     return this.category === 'hiring';
  //   }
  // },
  // desc: {
  //   type: String,
  //   required: function () {
  //     // This function determines whether the email field is required based on the selected category.
  //     return this.category === 'hiring';
  //   }
  // },
  // category: {
  //   type: String,
  //   enum: ['looking-for-job', 'hiring'],
  //   required: true,
  // },


});

module.exports = mongoose.model("User", UserSchema);