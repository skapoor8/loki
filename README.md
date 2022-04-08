# Loki.js
A humble library for building SPAs

## TOC
1. Features
2. Getting started
3. APIs
    1. Components
    2. Services
    3. Models
    4. Stores
    5. CLI
4. Future Directions
5. Feedback

## Features
1. Create well-defined interfaces for your components
2. Automatically instantiate child components from a parent
3. Put your html, css and js all in one place
4. Define events for your loki components
4. Multiple loki apps on one page!
5. A handy-dandy cli!

## Getting Started
Create a new directory for your project, and then create a npm package.
```bash
npm init
```

Install loki
```bash
npm i @skapoor8/loki
```

To create a new loki project
```
npx loki new <app_name>
```

To serve
```
npx loki build
npx loki serve
```

## APIs

### Components
1. render() X
2. style() X
3. querySelector() X
4. addEventListeners() X?
5. static properties 
6. life cycle methods

### Models
1. New
2. Embedding
3. Array Embedding
4. Caching

### Services
1. Inject and create

### Stores
1. Publish
2. Subscribe
3. Unsubscribe
4. Get subs
5. Destroy store

### Utilities
1. cookie parser

### CLI
1. npx loki new [X]
2. npx loki build [X]
3. npx loki serve [X]
4. npx loki g component <component_name>
5. npx loki g service <service_name>
6. npx loki g model <model_name>

## Future Directions
0. micro front-ends and jquery-ui style plugins
1. efficient JSX like templating system
2. component tree representation for re-rendering
2. Adding some type of state management that allows updating component props efficiently
3. Adding Sass/Less support
4. Component templating
5. SSR
6. Express integration
7. Better bundling with webpack
8. Cross browser support
9. Compile to web components
10. Hot reload
11. client side routing
12. Better event handling... (call code from templates)
13. modules, and project organization?

## Todo
0. Figure out development+testing, and prod work flow -> document it
1. Get build and serve scripts running [X]
2. Get new script working [X]
3. Event listeners need to accept args/run any code... or do away with it 
4. Add updateState and onUpdateState lifecycle methods -> for manually updating html and sub-components...
4. Make store 
5. Add service
6. Add loki version in files
7. How will people use loki? install globally?
8. Add generator methods for stores, and services
9. Watch for changes and re-build
10. Nice starter project...

## Bugs/Issues
1. Click on child does not trigger click on parent... does this make sense...?
2. Why is auto-attach event listeners only called in toplevel components?