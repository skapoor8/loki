console.log('Loki: running script serve');

function serveLokiApp(config) {
    console.log('config:', config, process.cwd());
    require('../server');
}

module.exports = serveLokiApp;