console.log('Loki: running script serve');

function serveLokiApp(config) {
    console.log('config:', config, process.cwd());
    console.log('start dev server here');
    require('../server');
}

module.exports = serveLokiApp;