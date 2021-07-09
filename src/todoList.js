import Component from './component.js';

class TodoList extends Component {
    static selector = 'todo-list';
    static components = [];
    static events = ['click'];

    render() {
        return `
            <h2 onclick="sayWowza"><%= title %></h2>
            <ol>
            <% todoItems.forEach(todo => { %>
                <li><%= todo.title %><input type="checkbox" /></li>
            <% }) %>
            </ol>
        `;
    }

    static style() {
        return `
            todo-list {
                display: block;
            }
            .classC {
                position: relative;
            }
        `;
    }

    sayWowza() {
        console.error('WOWZAA!!');
        this.dispatchEvent('click');
    }
}

export default TodoList;