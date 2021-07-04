import Component from './component.js';

// import TodoIndex from './todoIndex.js';
// import TodoList from './todoList.js';

class TodoApp extends Component {
    static selector = 'todo-app';

    registerComponents() {
        return {
            // TodoIndex,
            // TodoList
        };
    }

    registerEvents() {
        return [];
    }

    render() {
        var html = '';
        html += '<h1>Todo App</h1>';
        // html += '<todo-index></todo-index>';
        // html += '<todo-list></todo-list>';
        return html;
    }

    style() {
        return ``;
    }

    addEventListeners() {}
    addSubscriptions() {}

    // public API ----------------------------------------------------------------------------------

    // event handlers ------------------------------------------------------------------------------
}

export default TodoApp;