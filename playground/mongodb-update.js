// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  // findOneAndUpdate

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59ee632371917e4bd98773e1")
  }, {
    $set: {
      name: 'Pedro'
    },
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59ee632371917e4bd98773e1")
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }
).then((result) => {
  console.log(result);
})

});
