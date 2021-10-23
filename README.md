# Loki.js
A humble library for building SPAs, micro front-ends and jquery-ui style plugins.

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
1. render()
2. style()
3. querySelector()
4. addEventListeners()
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
1. npx loki new [1]
2. npx loki build [2]
3. npx loki serve [3]
4. npx loki g component <component_name>
5. npx loki g service <service_name>
6. npx loki g model <model_name>

## Future Directions
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

## Todo
1. Get build and serve scripts running [1]
2. Get new script working [2]
2. Infer bootstrap component and app selector from js-main
3. Make store [3]