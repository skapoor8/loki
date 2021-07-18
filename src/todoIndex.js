import {Component} from 'loki';

class TodoIndex extends Component {
    static selector = 'todo-index';
    static components = [];
    static events = [];

    render() {
        return `
            <h2>Todo Index</h2>
            <ol>
            <% lists.forEach(list => { %>
                <li><a href="#"><%= list.title %></a></li>
            <% }) %>
            </ol>
        `;
    }

    static style() {
        return `
            .classB {
                display: block;
            }
        `;
    }
}

export default TodoIndex;