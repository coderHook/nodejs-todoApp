const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// This method only return a result but not the docs
// Todo.remove().then((result) => {
//   console.log(result);
// });

// Those methods return the docs
  // Todo.findOneAndRemove()

  // Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59f3a59b7723451e60761853').then((todos) => {
  console.log(todos);
})
