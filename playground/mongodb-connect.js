// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  // // todo collection
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
  // user collection

  // Insert new doc into users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Pedro',
  //   age: '30',
  //   location: 'Madrid'
  // }, (err, result) => {
  //   if (err) { return console.log('Cannot insert in Users collection.');}
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //
  // });

  db.close();
});
