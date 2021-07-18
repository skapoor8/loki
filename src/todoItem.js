import {Component} from 'loki';

class TodoItem extends Component {
    static selector = 'todo-item';

    render() {
        return `This is a todo item`;
    }

    static style() {
        return ``;
    }
}

export default TodoItem;