const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');

var id = '59f2170385516c18029e5a46';
id_user = '59ef55ba07ebeea431c01521';

// if (!ObjectId.isValid(id)) {
//   console.log('ObjectId not valid');
// } else { console.log('ObjectId is Valid!');}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });

//Todo.findOne()

// Todo.findById(id).then((todo) => {
//   console.log('findByid: ', todo);
// });

// querie user collection
User.findById(id_user).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log(user);
}).catch((e) => {
  console.log(e);
});
