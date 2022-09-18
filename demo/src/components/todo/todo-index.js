import Loki from '@skapoor8/loki';
import { TodoIndexPresenter } from '../../services/todo-index.presenter';
import { UIStore } from '../../stores/ui-store';
import TodoIndexListItem from './todo-index-list-item';

class TodoIndex extends Loki.Component {
  static selector = 'todo-index';
  static components = [
    TodoIndexListItem
  ];
  static events = [];
  static services = {
    uiStore: UIStore,
    presenter: TodoIndexPresenter
  };

  render() {
    return /* html */`
      <div class="todoindex-container">
        <span class="todoindex-header">My Lists</span>
        <% if (lists?.length > 0) { %>
          <% lists.forEach(list => { %>
            <todo-index-list-item 
              state="<%= list %>" 
              (click)="onClickListItem"
              >
            </todo-index-list-item>
          <% }) %>
        <% } %>
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

  onBeforeInit() {
    this.state = {
      lists: this.services.uiStore.val('listSummaries')
    };
  }

  onBeforeDestroy() {
    // console.error('TodoIndex: onBeforeDestroy called');
  }

  onInit() {
    // console.error('TodoIndex onInit!', this.uid);
    const { uiStore, presenter } = this.services;

    this.subscriptions = []
    this.subscriptions.push(
      uiStore.sub('listSummaries', lists => this.setState({lists}))
    );

    // auto select first list
    const selectedId = uiStore.val('selectedListId');
    if (!selectedId) {
      const summaries = uiStore.val('listSummaries');
      presenter.selectList(summaries[0]?.id);
    }
  }

  onDestroy() {
    // console.error('TodoIndex.onDestroy', this.uid,': called');
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClickListItem(e) {
    const { presenter } = this.services;
    console.log('TodoIndex.onClickListItem =', e);
    presenter.selectList(parseInt(e.detail.data.id));
  }
}

export default TodoIndex;