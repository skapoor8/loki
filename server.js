const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');



try {
    var app = express();
    var config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'loki.json')));
    console.log('In server.js, process.cwd() =', process.cwd());
    // if (config.mode == 'local') {
    //     console.log('mode in config is local');
    //     app.use(express.static(path.join(__dirname, 'src')));
    //     app.use('/ejs', express.static(path.join(__dirname, 'node_modules', 'ejs')));
    //     app.use(express.static(path.join(process.cwd(), 'src')));
    // }
    
    app.use(express.static(path.join(process.cwd(), 'dist', config['project-name'])));
    // app.use(express.static(path.join(process.cwd(), 'src')));
    // app.use('@skapoor/loki', express.static(path.join(process.cwd(), 'node_modules', '@skapoor', 'loki')));

    app.use('/', (req, res) => {
        console.log('serving', path.join(process.cwd(), 'src', 'index.html'));
        res.status(200).sendFile(path.join(process.cwd(), 'src', 'index.html'));
    });

    app.use((req, res) => {
        res.status(404).redirect('/');
    });

    http.createServer(app).listen(3012);
} catch (e) {
    console.error('No loki config found');
    console.error(e);
}

