import test from '/usr/test/test.js';

window.addEventListener('load', function() {
    console.log('Attempting to init test!');
    var app = new test({selector: 'todo-app', toplevel: true});
    window['test'] = app;
});