const http = require('http');
const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname, 'src');
var app = express();

app.use(express.static('src'));
app.use((req, res) => {
    res.status(404).redirect('/');
});

http.createServer(app).listen(3011);