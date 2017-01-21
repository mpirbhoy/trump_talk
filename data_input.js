var Course = require('./model/course');
var allData = require("./data/courses.json");
var async = require("async");
var i = -1;

function saveRow(callback) {
    var newCourse = new Course(allData[i]);
    newCourse.save(function (err, product, numAffected) {
      if (err) {
        console.log('Error sending message: ', error);
      } else {
        if (numAffected == 1) {
            callback();
        }
      }
    })
    
}
module.exports = function () {

    async.whilst(
        function () {
            console.log("this is i : " + i);
            //console.log(allData.length);
            //console.log("comparison of length with i " + (i < (allData.length - 1)));
            return i < allData.length - 1; 
        }, function (callback) {
            i++;
            saveRow(callback);
        }, function (err) {
            console.log("All Done!");
        }
    );
};