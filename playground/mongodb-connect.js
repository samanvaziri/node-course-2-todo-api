//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

   // db.collection('Users').insertOne({
   //   name: 'Saman',
   //   age: 29,
   //   location: 'Tehran'
   // }, (err, result) => {
   //   if (err) {
   //     console.log('Unable to insert Users', err);
   //   }
   //   console.log(result.ops[0]._id.getTimestamp());
   // })
  db.close();
});
