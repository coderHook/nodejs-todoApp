// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result.result);
  // })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  //deete duplicate Users
  db.collection('Users').deleteMany({name: 'Pedro'}).then((result) => {
    console.log('deleteMany', result.result);
  });


  //findOneAndDelete by _id
db.collection('Users').findOneAndDelete({_id: new ObjectID('59ee1ec8971e7e2ff817cf01')}).then((result) => {
  console.log('findOneAndDelete: ', result);
});

});
