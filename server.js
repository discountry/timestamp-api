var express = require("express");
var moment = require("moment");
var app = express();

app.get('/', function (req, res) {
  var message = `Example usage:<br/>
  https://timestamp-ms.herokuapp.com/December%2015,%202015<br/>
https://timestamp-ms.herokuapp.com/1450137600<br/>
Example output:<br/>
{ "unix": 1450137600, "natural": "December 15, 2015" }`;
  res.send(message);
});

app.get('/:time',function (req,res) {
    var json = {"unix":moment(req.params.time).format('X'),"natural":moment(req.params.time).format("MMM Do, YY")};
    res.end(JSON.stringify(json));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 80!');
});