var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var otherTodo = new Todo({
  text: 'Whash the clothes',
  completed: true,
  completedAt: 288
});

// newTodo.save().then((doc) => {
//   console.log('saved todo: ', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save data');
});
