// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  // // find one and update example
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5982c6b121e28a9e8da66a12')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  // Find and Update a user's name and increment its age
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5982c87621e28a9e8da66a53')
  }, {
    $set: {
      name: 'Patrick'
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
