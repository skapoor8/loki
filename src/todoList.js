import Component from './component.js';

class TodoList extends Component {
    static selector = 'todo-list';
    static components = [];
    static events = [];

    render() {
        this.state = {
            title: 'Reminders',
            list: [
                {
                    title: 'Feed Bobo',
                    done: false
                },
                {
                    title: 'Feed Honey',
                    done: false
                }
            ]
        }
        return `
        <h2><%= title %></h2>
        <ol>
        <% list.forEach(todo => { %>
            <li><%= todo.title %><input type="checkbox" /></li>
        <% }) %>
        </ol>
        `;
    }
}

export default TodoList;