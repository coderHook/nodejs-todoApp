const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id=req.params.id;

  //Valid id using ObjectID
  if(!ObjectID.isValid(id)) {
    return  res.status(404).send('Id is not Valid');
  };

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});


// Creating a delete route
app.delete('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return console.log('Id not Valid')
  };

    //Let'd delete the id
    Todo.findByIdAndRemove(req.params.id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.status(200).send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});

// PATCH route <allow to update todos>
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']); // pick method takes and object and am array of properties we want to pull of, here just the 2 that we want to update by the user

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime(); //return a javascript timestamp
  } else {
    body.completed = false;
    body.completedAt = null;
  };

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    };
    res.status(200).send({todo})
  }).catch((e) => {
    res.status(400).send();
  });

});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
