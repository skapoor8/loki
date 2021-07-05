import Component from './component.js';

// import TodoIndex from './todoIndex.js';
// import TodoList from './todoList.js';

class TodoApp extends Component {
    static selector = 'todo-app';

    registerComponents() {
        return [
            // TodoIndex,
            // TodoList
        ];
    }

    registerEvents() {
        return [];
    }

    render() {
        return /*html*/`
        <h1 el="title">Todo App</h1>
        <todo-index el="index" onClick=""></todo-index>
        <todo-list></todo-list>
        {this.state.arr.map(a => <todo-item title=""></todo-item>)}
        `;
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