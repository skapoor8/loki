const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

console.log('Loki: running script build');

// 1. build index file
// 2. build wpconfig
// 3. compile

function buildLokiApp(config) {
    console.log('loki config:', config);
    var appName = config['project-name'],
        appPath = path.join(process.cwd(), 'src', config['js-main']),
        wpConfig,
        indexPath;
    
    indexPath = buildIndexFile(appName, appPath);
    wpConfig = buildWebpackConfig(appName, indexPath);
    console.log('final wpconfig:', wpConfig);
    webpack(wpConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.error('Loki build failed');
            if (err) console.error(err);
            if (stats.hasErrors()) console.error(stats.compilation.errors);
        } else {
            console.log('Loki build success');
        }    
    });
}

module.exports = buildLokiApp;

// helpers -----------------------------------------------------------------------------------------

function buildIndexFile(appName, appPath) {
    var templatePath = path.join(__dirname, '..', 'templates', 'index.js.template'),
        appIndexPath = path.join(__dirname, '..', 'tmp', appName+'-index.js');

    var template = fs.readFileSync(templatePath, 'utf-8');
    template = template.replace(/<APP_NAME>/g, appName);
    template = template.replace(/<APP_PATH>/g, appPath);

    fs.writeFileSync(appIndexPath, template);
    return appIndexPath;
}

function buildWebpackConfig(appName, indexPath) {
    var wpConfig = {
        entry: indexPath,
        output: {
            filename: appName ? appName+'.bundle.js' : 'lokiApp.bundle.js',
            path: path.join(process.cwd(), 'dist', appName)
        }, 
        resolve: {
            alias: {
                loki: path.join(__dirname, '..', 'src' )
            }
        } 
    };
    return wpConfig;
}

function buildHTML() {

}

function bundleCSS() {

}