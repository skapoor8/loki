import Loki from 'loki';

class AppHeader extends Loki.Component {
    static selector = 'app-header';

    render() {
        return /* html */`
        <h1>Todo App</h1>
        `;
    }

    static style() {
        return /* css */``;
    }
}

export default AppHeader;