import Loki from 'loki';

const DataStore = new Loki.Store({
  lists: [
    {
      type: 'TodoList',
      id: 1,
      title: 'Reminders',
      todoItems: [
        {
          type: 'TodoItem',
          title: 'Feed bilbo',
          done: false
        }, 
        {
          type: 'TodoItem',
          title: 'Feed Honeybee',
          done: false
        },
        {
          type: 'TodoItem',
          title: 'Study for driving permit test',
          done: false
        }
      ]
    },
    {
      type: 'TodoList',
      id: 2,
      title: 'Work',
      todoItems: [
        {
          type: 'TodoItem',
          title: 'Do paperwork for new job',
          done: false
        },
        {
          type: 'TodoItem',
          title: 'File new re-imbursements',
          done: false
        }
      ]
    }
  ]
});

export default DataStore;