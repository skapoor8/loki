# Loki.js
A humble library for building SPAs, micro front-ends and jquery-ui style plugins.

## Features
1. Create well-defined interfaces for your components
2. Automatically instantiate child components from a parent
3. Put your html, css and js all in one place
4. Define events for your loki components
4. Multiple loki apps on one page!
5. A handy-dandy cli!

## Goals
1. Scope css x
2. capture elements and components x
3. auto add event listeners (still working on components, issues with evented class) x
4. pass state by component attribs x
5. setState x 
6. lifecycle methods x
7. css exception for same class... todo-app should not be appended by itself x
8. Add component.querySelector method to return components instead of dom elements whenever there is a data-component-id attribute present on the elemnt. x
9. Move to npm module 
10. compile with webpack... [2]
11. npx loki build [1]
12. npx loki new
13. npx loki serve
14. ssr
15. npx loki build --ssr
13. specify global styles through loki.json
14. Basic unit testing...

## Reach Goals
1. HMR
2. State based ui updates
    - update attributess
    - update text
    - update lists - use linked lists
    - call setState on child components
3. Utility components for working with lists
4. Some mechanism for observability
5. Plugins to add behaviors to components, like draggable?
6. Pattern generation with cli
7. compile with webpack and add needed  polyfills
8. Cross browser testing
9. Ease of importing with node as well as in the browser...!
10. Support for embedding children inside components via ejs template... rn children are overwritten plain and simple
11. stores, models, services and routers?
12. Debugging friendly errors and error messages
13. Debugging assist - tree vizualizer?
14. Some unit testing with jest
15. Dependency injection mechanism for services
16. VSC highlighting for css and ejs in templates

## Completed Features
1. Scoped css
2. Scoped events
3. Captued elements and components, querySelector method working
4. Auto attach event listeners working
5. simple setState
6. passing initial state via attribs
7. 

## Questions
1. How can we do SSR if render function can call await... maybe an initial state must be provided. Client side vs. ssr modes of rendering?
2. Should models and stores be a part of this lib, or keep it seperate? Same q for front end router...
3. Is there a need for mixins? Like draggable and resizable? Maybe later... Starting small is better.
4. Should events be scoped somehow? 'loki-' for now
5. component plugins for extending component behavior, like jquery support... is this any different from mixins?
6. Is there a difference between an app versus a microfront end or plugin/widget builds? Should micro front ends be able to talk to one another...?