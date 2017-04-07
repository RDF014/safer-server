const mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/saferDb';
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;