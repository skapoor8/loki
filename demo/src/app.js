import Loki from '@skapoor8/loki';

// components
import AppHeader from './components/app-header.js';
import AppPage from './components/app-page.js';
import TodoIndex from './components/todo-index.js';
import TodoList from './components/todo-list.js';

class App extends Loki.Component {
    static selector = 'todo-app';
    static components = [
        AppHeader,
        AppPage,
        TodoIndex, 
        TodoList
    ];
    static events = [
        'click'
    ];

    render() {
        this.state = {
            ...this.state,
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
            ],
            showIndex: true
        }
        return /* html */`
            <app-header onclick="sayHi"></app-header>
            <app-page></app-page>
            <todo-index 
                el="index" 
                state="<%= JSON.stringify({lists: lists.map(l => {return {id: l.id, title: l.title};})}) %>">
            </todo-index>
            <todo-list
                el="list"
                state="<%= JSON.stringify(lists[0]) %>" 
                onclick="sayBye">
            </todo-list>
        `;
    }

    static style() {
        return /* css */`
            .classA {
                display: block; 
            }
        `; 
    }

    // public API ----------------------------------------------------------------------------------
    sayHi() {
        console.warn('HEY THERE!');
    }

    sayBye() {
        console.warn('DASVIDANYA!');
    } 

    // event handlers ------------------------------------------------------------------------------
}

export default App;