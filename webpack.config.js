var path = require('path');

module.exports = {
    entry: './src/run.js',
    output: {
        filename: 'todoApp.bundle.js',
        path: path.resolve(__dirname, 'src')
        // library: {
        //     name: 'TodoApp',
        //     type: 'umd'
        // }
    }, 
    mode: 'development',
    resolve: {
        alias: {
            loki: path.resolve(__dirname, 'src')
        }
    }
};