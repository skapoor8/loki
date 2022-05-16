import Loki from '@skapoor8/loki';

class TodoList extends Loki.Component {
    static selector = 'todo-list';
    static components = [];
    // static events = ['click'];

    render() {
        return /* html */`
            <h2><%= title %></h2>
            <ol>
            <% todoItems.forEach(todo => { %>
                <li><%= todo.title %><input type="checkbox" onclick="sayWowza" /></li>
            <% }) %>
            </ol>
        `;
    }

    static style() {
        return /* css */`
            todo-list {
                display: block;
            }
            .classC {
                position: relative;
            }
        `;
    }

    sayWowza(e) {
        console.error('e:', e);
        console.error('WOWZAA!!');
        e.stopPropagation();
    }
}

export default TodoList;