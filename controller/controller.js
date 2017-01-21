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
          callback(templates[i].response);
          return;
        }
      }
    }
  }

  callback(templates[0].response);
}