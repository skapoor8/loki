import Loki from '@skapoor8/loki';
import { DataStore } from '../stores/data-store';
import { UIStore } from '../stores/ui-store';

export class TodoIndexPresenter extends Loki.Service {
  static services = {
    uiStore: UIStore,
    dataStore: DataStore
  }

  get viewModel() {
    const {uiStore} = this.services;
    return uiStore.val('listSummaries');
  }

  onLoad() {
    console.log('TodoIndexPresenter.onLoad')
    const { dataStore, uiStore} = this.services;

    dataStore.sub('lists', lists => {
      this.buildViewModel();
    });

    uiStore.sub('selectedListId', () => {
      // console.error('selectedListId sub in TodoIndexPresenter');
      this.buildViewModel()
    });
  }

  selectList(listId) {
    const { dataStore, uiStore } = this.services;
    console.log('select id:', listId);
    uiStore.pub('addedItemId', null);
    uiStore.pub('selectedListId', listId);
  }



  buildViewModel() {
    console.error('buildViewModel')
    const { dataStore, uiStore} = this.services;
    const lists = dataStore.val('lists');
    const selectedListId = uiStore.val('selectedListId');
    const listSummaries = lists.map(l => ({
      id: l.id,
      title: l.title,
      color: l.color,
      isSelected: l.id === selectedListId,
      numItems: l.items?.length ?? 0
    }));
    console.log('listSummaries:', listSummaries);
    uiStore.pub('listSummaries', listSummaries);
  }

}