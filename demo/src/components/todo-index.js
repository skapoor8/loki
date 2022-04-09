import Loki from 'loki';

class TodoIndex extends Loki.Component {
    static selector = 'todo-index';
    static components = [];
    static events = [];

    render() {
        return /* html */`
            <h2>Todo Index</h2>
            <ol>
            <% lists.forEach(list => { %>
                <li><a href="#"><%= list.title %></a></li>
            <% }) %>
            </ol>
        `;
    }

    static style() {
        return /* css */`
            .classB {
                display: block;
            }
        `;
    }
}

export default TodoIndex;