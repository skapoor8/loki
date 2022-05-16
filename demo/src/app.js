//@ts-check

import Loki from '@skapoor8/loki';

// components
import AppHeader from './components/app-header.js';
import AppPage from './components/app-page.js';

class App extends Loki.Component {
  static selector = 'todo-app';
  static components = [
    AppHeader,
    AppPage
  ];
  static events = [
    'click'
  ];

  subscriptions = [];

  render() {
    return /* html */`
      <app-header onclick="sayHi"></app-header>
      <app-page></app-page>
    `;
  }

  static style() {
    return /* css */`
      app-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2rem;
      }

      app-page {
        display: flex;
        flex-grow: 1;
        flex-direction: row;
      }
    `; 
  }

  // lifecycle hooks -----------------------------------------------------------------------------
  

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