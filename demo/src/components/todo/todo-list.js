import Loki from '@skapoor8/loki';
import UiCircleCheckbox from '../ui/ui-circle-checkbox';

class TodoList extends Loki.Component {
    static selector = 'todo-list';
    static components = [
        UiCircleCheckbox
    ];
    // static events = ['click'];

    render() {
        return /* html */`
            
            <div class="todolist-summary">
                <h2 class="todolist-header"><%= title %></h2>
                <h2 class="todolist-incomplete">42</h2>
            </div>
            <div class="todolist-actions">
                <span class="todolist-actions-count">0 Completed</span>
                <i class="todolist-actions-separator fa-solid fa-circle"></i>
                <span class="todolist-actions-item">Show</span>

                <div class="todolist-actions-add todolist-actions-item">
                    <span>Add</span>
                    <i class="fa-solid fa-plus"></i>
                </div>
                
            </div>
            <div class="todolist-body">
                <% todoItems.forEach((todo, i) => { %>
                    <!-- <div class="todolist-item">
                        <input type="checkbox" onclick="sayWowza" /> <%= todo.title %>                
                    </div> -->
                    <div class="todolist-item">
                        <ui-circle-checkbox></ui-circle-checkbox>
                        <span class="todolist-item-label"><%= todo.title %> </span>
                    </div>
                <% }) %>
            </div>
        `;
    }

    static style() {
        return /* css */`
            todo-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            .todolist-summary {
                display: flex;
                flex-direction: row;
                padding: 0 1rem;
                color: var(--blue);
            }

            .todolist-summary .todolist-header {
                flex-grow: 1;
                font-size: 2.5rem;
                line-height: 2rem;
            }

            .todolist-summary .todolist-incomplete {
                font-size: 2.5rem;
                line-height: 2rem;
            }

            .todolist-body {
                flex-grow: 1;
                padding: 0 1rem;
            }

            .todolist-actions {
                display: flex;
                flex-direction: row;
                margin: 0.25rem 1rem;
                margin-top: 0;
                padding-bottom: 0.5rem;
                align-items: center;
                border-bottom: 1px solid var(--gray-l);
            }

            .todolist-actions .todolist-actions-count {
                color: var(--gray-d);
            }

            .todolist-actions .todolist-actions-separator {
                font-size: 0.2rem;
                margin: 0 0.5rem;
            }

            .todolist-actions .todolist-actions-item {
                color: var(--blue);
                cursor: pointer;
            }

            .todolist-actions .todolist-actions-add {
                display: flex;
                flex-grow: 1;
                justify-content: end;
                align-items: center;
            }

            .todolist-actions .todolist-actions-add i {
                margin-left: 0.25rem;
            }

            .todolist-body .todolist-item {
                display: flex;
                flex-direction: row;
                align-items: start;
            }

            .todolist-body .todolist-item ui-circle-checkbox {
                margin-right: 1rem;
                padding: 0.25rem 0;
            }

            .todolist-body .todolist-item .todolist-item-label {
                flex-grow: 1;
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--gray-l);
            }

            
        `;
    }

    sayWowza(e) {
        console.error('e:', e);
        console.error('WOWZAA!!');
        e.stopPropagation();
    }
}

export default TodoList;