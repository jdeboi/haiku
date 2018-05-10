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
router.get('/api/', function(req, res, next) {
  // query string: http://localhost:8000/api/?in0=hello&in1=world&in2=woot
  // with a haiku: http://localhost:8000/api/?in0=hello%20world%20hello&in1=hello%20world%20hello%20world%20hell&in2=hello%20world%20hello
  var line0 = decodeURI(req.query.in0);
  var line1 = decodeURI(req.query.in1);
  var line2 = decodeURI(req.query.in2);
  var numSyl0 = syllable(line0);
  var numSyl1 = syllable(line1);
  var numSyl2 = syllable(line2);

  res.json([
    {numSyllables: numSyl0, isValid: numSyl0 == 5, originalText: line0},
    {numSyllables: numSyl1, isValid: numSyl1 == 7, originalText: line1},
    {numSyllables: numSyl2, isValid: numSyl2 == 5, originalText: line2}
  ]);

});

module.exports = router;
