//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');

// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({ name: 'Saman'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({ _id: new ObjectId('5b24ef5d03464d3538f438dc')}).then((result) => {
  console.log(result);
});

//  db.close();
});
