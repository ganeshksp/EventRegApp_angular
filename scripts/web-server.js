var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');//__dirname gives current location and '/../' takes one path upper
app.use(express.static(rootPath + '/app'));
app.listen(8000);
console.log('Listening on port 8000...');