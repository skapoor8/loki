import Component from './component.js';

class TodoList extends Component {
    static selector = 'todo-list';
    static components = [];
    static events = ['click'];

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
            <h2 onclick="sayWowza"><%= title %></h2>
            <ol>
            <% list.forEach(todo => { %>
                <li><%= todo.title %><input type="checkbox" /></li>
            <% }) %>
            </ol>
        `;
    }

    static style() {
        return `
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