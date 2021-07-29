# Goals

## By Release

## Version 1
1. Components should provide templating, adding event listeners, simple lifecycle methods, and automatic memory management
2. Simple service injection
3. Simple router that allows listening for and responding to route changes
4. CLI should support new, build and serve operations
5. Loki builds should be cross browser compatible
6. Loki build should allow compiling stylesheets

## All Goals

### Reasonable 

#### Components
- Scoped css
- Scoped events
- Captued elements and components, querySelector method working
- Auto attach event listeners working
- passing initial state via attribs
- Scope css x
- capture elements and components x
- auto add event listeners (still working on components, issues with evented class) x
- pass state by component attribs x
- setState x 
- lifecycle methods x
- css exception for same class... todo-app should not be appended by itself x
- Add component.querySelector method to return components instead of dom elements whenever there is a data-component-id attribute present on the elemnt. x

#### CLI
- Move to npm module 
- compile with webpack... [2] x
- npx loki build [1] x
- npx loki new
- npx loki serve
- ssr
- npx loki build --ssr
- specify global styles and assets through loki.json


### Reach

#### Components
- State based ui updates
    - update attributess
    - update text
    - update lists - use linked lists
    - call setState on child components
- Utility components for working with lists

#### CLI
- HMR
- Pattern generation with cli
- compile with webpack and add needed polyfills -> cross browser compatibility
- Ease of importing with node as well as in the browser...!
- Support for embedding children inside components via ejs template... rn children are overwritten plain and simple i.e. something like ng content projection

#### Stores/Observables
- Some mechanism for observability

#### Architecture
- Plugins to add behaviors to components, like draggable?
- stores, models, services and routers?
- TS support?
- Debugging friendly errors and error messages
- Debugging assist - tree vizualizer?
- Some unit testing with jest
- Dependency injection mechanism for services
- VSC highlighting for css and ejs in templates OR create JSX parser
- Basic unit testing...