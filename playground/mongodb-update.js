//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectId('5b25fd9dc1d1c4396a2a1f5a')
// }, {
//    $set: {
//      completed: true
//    }
//  }, {
//      returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

 db.collection('Users').findOneAndUpdate({
  _id: 123
 }, {
    $set: {
     name: 'Saman'
  },
  $inc: {
      age: 1
    }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

//  db.close();
});
