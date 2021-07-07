import Component from './component.js';

class TodoIndex extends Component {
    static selector = 'todo-index';
    static components = [];
    static events = [];

    render() {
        this.state = {
            lists: [
                {
                    title: 'Reminders',
                    id: 1
                },
                {
                    title: 'Work',
                    id: 2
                }
            ]
        }
        return `
        <h2>Todo Index</h2>
        <ol>
        <% lists.forEach(list => { %>
            <li><a href="#"><%= list.title %></a></li>
        <% }) %>
        </ol>
        `;
    }
}

export default TodoIndex;