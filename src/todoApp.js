import Loki from 'loki';

import TodoIndex from './todoIndex.js';
import TodoList from './todoList.js';

class TodoApp extends Loki.Component {
    static selector = 'todo-app';
    static components = [
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
        return `
            <h1 el="title" onclick="sayHi">Todo App</h1>
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
        return `
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

export default TodoApp;