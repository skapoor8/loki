import TodoApp from './todoApp';

window.addEventListener('load', function() {
    console.log('Attempting to init TodoApp!');
    var app = new TodoApp({selector: 'todo-app', toplevel: true});
    window.app = app;
});