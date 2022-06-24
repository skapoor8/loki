import Loki from '@skapoor8/loki';
import TodoIndexListItem from './todo-index-list-item';

class TodoIndex extends Loki.Component {
  static selector = 'todo-index';
  static components = [
    TodoIndexListItem
  ];
  static events = [];

  render() {
    return /* html */`
      <div class="todoindex-container">
        <span class="todoindex-header">My Lists</span>
        <% lists.forEach(list => { %>
          <todo-index-list-item state="<%= {title: list.title} %>"></todo-index-list-item>
        <% }) %>
      </div>
      
    `;
  }

  static style() {
    return /* css */`
      .todoindex-header {
        display: block;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        color: var(--gray-d);
      }
    `;
  }
}

export default TodoIndex;