const http = require('http');
const path = require('path');
const express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use((req, res) => {
    console.log('here!');
    res.status(404).redirect('/');
});

http.createServer(app).listen(3011);