var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Message Board' });
})

router.post('/new', (req, res) =>{
  const { message, author } = req.body;
  messages.push({
    text: message,
    user: author,
    added: new Date()
  });
  res.redirect('/');
})

module.exports = router;
