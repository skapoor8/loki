import Component from './component.js';

import TodoIndex from './todoIndex.js';
import TodoList from './todoList.js';

class TodoApp extends Component {
    static selector = 'todo-app';
    static components = [
        TodoIndex, 
        TodoList
    ];
    static events = [
        'click'
    ];

    render() {
        return `
            <h1 el="title" onclick="sayHi">Todo App</h1>
            <todo-index el="index"></todo-index>
            <todo-list onclick="sayHi"></todo-list>
        `;
    }

    static style() {
        return `
            .classA {
                display: block;
            }
        `;
    }

    // public API ----------------------------------------------------------------------------------
    sayHi() {
        console.warn('HEY THERE!');
    }

    // event handlers ------------------------------------------------------------------------------
}

export default TodoApp;