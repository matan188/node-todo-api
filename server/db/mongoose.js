const mongoose = require('mongoose');

// MONGOOSE SETUP
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true});

module.exports = {mongoose};
