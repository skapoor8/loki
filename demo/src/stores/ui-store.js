import Loki from 'loki';

export class UIStore extends Loki.Store {

  init() {
    this.payloads = {
      selectedListId: null,
      listSummaries: [],
      selectedListSummary: null,
      itemSummaries: [],
      addedItemId: null,
    }
  }

}