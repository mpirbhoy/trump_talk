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
    for (var k_i in templates[i].keys) {
      if (receivedMsg.toLowerCase().includes(templates[i].keys[k_i])) {
        callback(randomizer(templates[i].response), randomizer(templates[i].image));
        return;
      }
    }
  }

  callback(randomizer(templates[0].response), randomizer(templates[i].image));
}

function randomizer(responses) {
  if (responses !=== "undefined") {
    var len = responses.length;
    var i = Math.round(Math.random() * (len - 1)); 
    return responses[i];  
  } else {
    return randomizer(templates[0].image);
  }
  
}