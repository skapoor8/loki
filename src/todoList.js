import Component from './component.js';
import TodoItem from './todoItem.js';

class TodoList extends Component {
    static selector = 'todo-list';

    registerComponents() {
        return {
            TodoItem
        };
    }

    render() {
        var html = ''; 
        html += '<h1 data-element="listName">List Name</h1>';
        html += '<ol>';
        this.state.todoItems.forEach(todoItem => {
            html += `<li><todo-item state-todo="${todoItem}"></todo-item></li>`;
        });
        html += '</ol>';
    }
}

export default TodoList;