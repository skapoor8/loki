import Loki from '@skapoor8/loki';
import DataStore from '../stores/data-store';
import TodoIndex from './todo-index';
import TodoList from './todo-list';

class AppPage extends Loki.Component {
  static selector = 'app-page';
  static components = [
    TodoIndex, 
    TodoList
];

  render() {
    this.state = {
      ...this.state,
      lists: DataStore.val('lists'),
      showIndex: true
    };

    return /* html */`
      <div class="column-left">
        <% if (lists && lists.length > 0) { %>
          <todo-index 
            el="index" 
            state="<%= JSON.stringify({lists: lists.map(l => {return {id: l.id, title: l.title};})}) %>">
          </todo-index>
        <% } %>
      </div>
      <div class="column-right">
        <% if (lists && lists.length > 0) { %>
          <todo-list
            el="list"
            state="<%= JSON.stringify(lists[0]) %>" 
            onclick="sayBye">
          </todo-list>
        <% } %>
      </div>  
    `;
  }

  static style() {
      return /* css */`
        .column-left {
          display: flex;
          flex-direction: column;
          flex-basis: 20%;
        }

        .column-right {
          display: flex;
          flex-direction: column;
        }
      `;
  }

  // lifecycle hooks -----------------------------------------------------------------------------

  onInit() {
    this.subscriptions = [];
        this.subscriptions.push(
            DataStore.sub('lists', lists => this.setState({lists})),
        );
  }

  onDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  // api

  sayBye() {
    console.warn('DASVIDANYA!');
  } 
}

export default AppPage;