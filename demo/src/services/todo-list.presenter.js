import Loki from '@skapoor8/loki';
import { DataStore } from '../stores/data-store';
import { UIStore } from '../stores/ui-store';
import { TodoService } from './todo.service';

export class TodoListPresenter extends Loki.Service {
  static services = {
    dataStore: DataStore,
    uiStore: UIStore,
    todoService: TodoService
  };
  subscriptions = [];

  // build view model

  _buildViewModel() {
    const { dataStore, uiStore, todoService } = this.services;
    const listId = uiStore.val('selectedListId');
    const listSummary = this.getListSummary();

    const items = dataStore.val('items');
    const itemSummaries = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        done: item.done
      };
    });

    uiStore.pub('selectedListSummary', listSummary);
    uiStore.pub('itemSummaries', itemSummaries);
  }

  // lifecycle 

  onLoad() {
    const { dataStore, uiStore } = this.services;
    this.subscriptions.push(
      uiStore.sub('selectedListId', async sel => await this._handleListSelection(sel)),
      dataStore.sub('items', () => this._buildViewModel())
    );
  }

  onUnload() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // api  

  getListSummary() {
    const { uiStore } = this.services;
    const selId = uiStore.val('selectedListId');
    const summaries = uiStore.val('listSummaries');
    const selected = summaries.find(s => s.id == selId);
    return selected;
  }

  async addItem() {
    const {todoService, uiStore} = this.services;
    const listId = uiStore.val('selectedListId');

    const addedItemId = await todoService.createTodoItem(listId, '');
    setTimeout(() => 
      uiStore.pub('addedItemId', addedItemId),
      50
    );
  }

  async updateTodoItem(id, args={}) {
    const {todoService, uiStore } = this.services;
    await todoService.updateTodoItem(id, args); 
  }

  async deleteTodoItem(itemId) {
    const {todoService, uiStore} = this.services;
    const listId = uiStore.val('selectedListId');
    await todoService.deleteTodoItem(listId, itemId);
  }

  // subscription handlers
  async _handleListSelection(selectedListId) {
    await this.services.todoService.getTodoItemsByListId(selectedListId);
  }

  // helpers
}