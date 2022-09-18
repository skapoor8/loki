import Loki from '@skapoor8/loki';
import TodoListIcon from './todo-list-icon';

class TodoIndexListItem extends Loki.Component {
    static selector = 'todo-index-list-item';
    static events = ['click'];
    static components = [
        TodoListIcon
    ];

    render() {
        return /* html */`
            <div 
              class="todoindexlistitem-container <%= isSelected ? 'todoindexlistitem-selected' : '' %>"
              (click)="onClickContainer"
            >
              <todo-list-icon class="todoindexlistitem-icon" state="<%= {'color': color} %>"></todo-list-icon>
              <span><%= title %></span>
            </div>
        `;
    }

    static style() {
        return /* css */`
          todo-index-list-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0.10rem 0.5rem;
          }

          .todoindexlistitem-container {
            display: flex;
            flex-grow: 1;
            flex-direction: row;
            align-items: center;
            border-radius: 0.2rem;
            padding: 0.25rem 0.5rem;
            cursor: pointer;
          }

          .todoindexlistitem-container.todoindexlistitem-selected {
            background: var(--gray-m);
          }

          .todoindexlistitem-icon {
            margin-right: 0.5rem;
          }
        `;
    }

    onClickContainer(e) {
      console.error('click:', this.state);
      this.dispatchEvent('click', this.state);
    }

    onInit() {
      // console.log('TodoListItem onInit: state =', this.state);
    }
}

export default TodoIndexListItem;