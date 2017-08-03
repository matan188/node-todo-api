// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');


  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // find and delete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // delete many
  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });

  // find one and delete by id
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59823e0444ceed1ed482724b')
  }).then((result) => {
    console.log(result);
  });


  db.close();
});
