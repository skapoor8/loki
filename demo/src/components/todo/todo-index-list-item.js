import Loki from '@skapoor8/loki';
import TodoListIcon from './todo-list-icon';

class TodoIndexListItem extends Loki.Component {
    static selector = 'todo-index-list-item';
    static components = [
        TodoListIcon
    ];

    render() {
        return /* html */`
            <div class="todoindexlistitem-container">
              <todo-list-icon class="todoindexlistitem-icon"></todo-list-icon>
              <span><%= title %></span>
            </div>
        `;
    }

    static style() {
        return /* css */`
          .todoindexlistitem-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0.35rem 1rem;
          }

          .todoindexlistitem-icon {
            margin-right: 0.5rem;
          }
        

        `;
    }
}

export default TodoIndexListItem;