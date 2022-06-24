import Loki from '@skapoor8/loki';
import DataStore from '../../stores/data-store';
import AppSearch from './app-search';
import TodoIndex from '../todo/todo-index';
import TodoList from '../todo/todo-list';

class AppPage extends Loki.Component {
  static selector = 'app-page';
  static components = [
    AppSearch,
    TodoIndex, 
    TodoList,
];

  render() {
    this.state = {
      ...this.state,
      lists: DataStore.val('lists'),
      showIndex: true
    };

    return /* html */`
      <div class="apppage-columnleft surface-a">
        <app-search></app-search>
        <% if (lists && lists.length > 0) { %>
          <todo-index 
            el="index" 
            state="<%= {lists: lists.map(l => {return {id: l.id, title: l.title};})} %>">
          </todo-index>
        <% } %>
        <div class="apppage-columnleft-addlistbutton">
          <i class="fa-solid fa-circle-plus"></i>
          <span>Add List</span>
        </div>
      </div>
      <div class="apppage-columnright">
        <% if (lists && lists.length > 0) { %>
          <todo-list
            el="list"
            state="<%= lists[0] %>" 
            onclick="sayBye">
          </todo-list>
        <% } %>
      </div>  
    `;
  }

  static style() {
      return /* css */`
        app-page {
          display: block;
          width: 100%;
        }

        .apppage-columnleft {
          display: flex;
          flex-direction: column;
          flex-basis: 20%;
        }

        .apppage-columnleft todo-index {
          flex-grow: 1;
        }

        .apppage-columnleft-addlistbutton {
          padding: 0.5rem;
          border-top: thin solid var(--gray-m);
          color: var(--gray-d);
        }

        .apppage-columnright {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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