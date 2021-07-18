import todoApp from '/Users/owner/Desktop/Node/lokiTodo/src/app.js';

window.addEventListener('load', function() {
    console.log('Attempting to init todoApp!');
    var app = new todoApp({selector: 'todo-app', toplevel: true});
    window['todoApp'] = app;
});