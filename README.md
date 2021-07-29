# Loki.js
A humble library for building SPAs, micro front-ends and jquery-ui style plugins.

## TOC
1. Features
2. Getting started
3. APIs
    1. Components
    2. Loki CLI
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

### CLI
1. npx loki new
2. npx loki build
3. npx loki serve
4. npx loki g component <component_name>

## Future Directions
Current plans for Loki include:
1. Implementing a JSX like templating system
2. Adding some type of state management if it doesn't cause bundle bloat
3. Adding Sass support

## Feedback
Feel free to email me your feedback/suggestions and feature requests!