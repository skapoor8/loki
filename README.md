# Loki.js
A humble library for building SPAs, micro front-ends and jquery-ui style plugins in a post-jquery world.

## Features
1. Create well-defined interfaces for your components
2. Automatically instantiate child components from a parent
3. Put your html, css and js all in one place
4. Define events for your loki components
4. Multiple loki apps on one page!
5. A handy-dandy cli!

## Reach Goals
1. HMR
2. State based ui updates
    - update attributess
    - update text
    - update lists - use linked lists
    - call setState on child components
3. Utility components for working with lists
4. Some mechanism for observability...
5. Plugins to add behaviors to components, like draggable?
6. Patten generation with cli
7. compile with webpack and add needed  polyfills
8. Cross browser testing
9. Ease of importing with node as well as in the browser...!
10. Support for embedding children inside components via ejs template... rn children are overwritten plain and simple

## Todo
1. Scope css x
2. capture elements and components x
3. auto add event listeners (still working on components, issues with evented class)
4. pass state by component attribs
5. setState and SSR?
6. lifecycle methods
7. css exception for same class... todo-app should not be appended by itself
8. Add component.querySelector method to return components instead of dom elements whenever there is a data-component-id attribute present on the elemnt. x

## Questions
1. How can we do SSR if render function can call await... maybe an initial state must be provided. Client side vs. ssr modes of rendering?
2. Should models and stores be a part of this lib, or keep it seperate? Same q for front end router...
3. Is there a need for mixins? Like draggable and resizable? Maybe later... Starting small is better.
4. Should events be scoped somehow?
