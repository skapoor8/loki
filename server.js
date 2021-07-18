const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');



try {
    var app = express();
    var config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'loki.json')));

    // if (config.mode == 'local') {
    //     console.log('mode in config is local');
    //     app.use(express.static(path.join(__dirname, 'src')));
    //     app.use('/ejs', express.static(path.join(__dirname, 'node_modules', 'ejs')));
    //     app.use(express.static(path.join(process.cwd(), 'src')));
    // }
    app.use(express.static(path.join(__dirname, 'src')));
    app.use(express.static(path.join(process.cwd(), 'dist')));

    app.use('/', (req, res) => {
        console.log('serving', path.join(process.cwd(), 'src', 'index.html'));
        res.status(200).sendFile(path.join(process.cwd(), 'src', 'index.html'));
    });

    app.use((req, res) => {
        res.status(404).redirect('/');
    });

    http.createServer(app).listen(3011);
} catch (e) {
    console.error('No loki config found');
    console.error(e);
}

