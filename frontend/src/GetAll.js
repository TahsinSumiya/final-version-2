const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const auth = admin.auth();


const getAllUsers = (req, res) => {
  const maxResults = 1; // optional arg.

  auth.listUsers(maxResults).then((userRecords) => {
    userRecords.users.forEach((user) => console.log(user.toJSON()));
    res.end('Retrieved users list successfully.');
  }).catch((error) => console.log(error));
};

module.exports = {
  api: functions.https.onRequest(getAllUsers),
};