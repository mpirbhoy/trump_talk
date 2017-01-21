var request = require('request');
var templates = require('./../data/templates.json');

//get Home
module.exports.getHome = function (req, res) {    
    res.send("test");
};

//Return response
module.exports.getResponse = function(receivedMsg, callback) {
  // callback(receivedMsg);
  var words = receivedMsg.toLowerCase().split(' ');

  for (var i in templates) {
    for (var ii in words) {
      for (var k_i in templates[i].keys) {
        if (templates[i].keys[k_i] == words[ii]) {
          callback(randomizer(templates[i].response));
          return;
        }
      }
    }
  }

  callback(randomizer(templates[0].response));
}

function randomizer(responses) {
  var len = responses.length;
  var i = Math.round(Math.random() * (len - 1));
  return responses[i];


}