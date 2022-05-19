var express = require('express');
const routes = require('./routes');
var app = express();
const PORT = process.env.PORT || 5050
app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
const { books } = require('./request')
app.use('/', routes);