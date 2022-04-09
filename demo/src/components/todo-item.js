import Loki from 'loki';

class TodoItem extends Loki.Component {
    static selector = 'todo-item';

    render() {
        return /* html */`This is a todo item`;
    }

    static style() {
        return /* css */``;
    }
}

export default TodoItem;