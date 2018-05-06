var express = require('express');
var router = express.Router();
var syllable = require('syllable');

/* GET home page. */
router.get('/', function(req, res, next) {
  var numSyll = ('Hello World'); // 3

  res.render('index', { title: 'Hello World' });
});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.get('/api/haiku', function(req, res, next) {
  var numSyll = syllable('Hello World'); // 3

  res.json([
    {numSyllables: 10, isValid: false, originalText: "my haiku!" },
    {numSyllables: 10, isValid: false, originalText: "my haiku!" },
    {numSyllables: 10, isValid: false, originalText: "my haiku!" }
  ]);
});

module.exports = router;
