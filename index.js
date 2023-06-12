var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From misalPav" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello misalPav" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! yooo" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
