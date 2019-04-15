var express = require('express');
var router = express.Router();
var todos = require('../data/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment', todos });
});

router.post('/todos', function(req, res, next){
  console.log(todos)
  todos.push({todo: req.body.todo, done: false});
  res.redirect('/');
})

module.exports = router;
