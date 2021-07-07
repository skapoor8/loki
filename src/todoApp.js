import Component from './component.js';

import TodoIndex from './todoIndex.js';
import TodoList from './todoList.js';

class TodoApp extends Component {
    static selector = 'todo-app';
    static components = [
        TodoIndex, 
        TodoList
    ];
    static events = [];

    render() {
        return `
        <h1 el="title">Todo App</h1>
        <todo-index el="index"></todo-index>
        <todo-list></todo-list>
        `;
    }

    style() {
        return ``;
    }

    // public API ----------------------------------------------------------------------------------

    // event handlers ------------------------------------------------------------------------------
}

export default TodoApp;