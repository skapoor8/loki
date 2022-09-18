import Loki from '@skapoor8/loki';
import { DataStore } from '../../stores/data-store';
import AppSearch from './app-search';
import TodoIndex from '../todo/todo-index';
import TodoList from '../todo/todo-list';
import { TodoService } from '../../services/todo.service';
import { UIStore } from '../../stores/ui-store';

class AppPage extends Loki.Component {
  static selector = 'app-page';
  static components = [
    AppSearch,
    TodoIndex, 
    TodoList,
  ];
  static services = {
    dataStore: DataStore,
    uiStore: UIStore,
    todoService: TodoService
  };

  render() {
    return /* html */`
      <div class="apppage-columnleft surface-a">
        <app-search (change)="onSearch"></app-search>
        <todo-index el="index"></todo-index>
        <div class="apppage-columnleft-addlistbutton">
          <i class="fa-solid fa-circle-plus"></i>
          <span onclick="sayBye">Add List</span>
        </div>
      </div>
      <% if (selectedId) { %>
        <div class="apppage-columnright">
          <todo-list el="list"></todo-list>
        </div>
      <% } %>  
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
          flex-basis: 80%;
          max-width: 80vw;
          min-width: 1px;
        }
      `;
  }

  // lifecycle hooks -----------------------------------------------------------------------------

 
  onBeforeInit() {
    this.state = {
      ...this.state,
      selectedId: null,
      showIndex: true
    };
  }

  onInit() {
    
    // console.log('AppPage: this =', this);
    this.subscriptions = [];
    this.subscriptions.push(
      this.services.uiStore.sub('selectedListId', id => this.setState({selectedId: id}))
    );
    // this.services.todoService.exampleServiceMethod();
  }

  onDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  // api

  sayBye() {
    console.warn('AppPage: DASVIDANYA!');
  } 

  onSearch(changeEvent) {
    console.log('AppPage: searched ', changeEvent.detail.data);
  }
}

export default AppPage;