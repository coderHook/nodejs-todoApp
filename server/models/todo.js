var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true //remove spaces at the beggining.
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};
