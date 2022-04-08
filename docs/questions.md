# Questions

1. How can we do SSR if render function can call await... maybe an initial state must be provided. Client side vs. ssr modes of rendering?
2. Should models and stores be a part of this lib, or keep it seperate? Same q for front end router...
3. Is there a need for mixins? Like draggable and resizable? Maybe later... Starting small is better.
4. Should events be scoped somehow? 'loki-' for now
5. component plugins for extending component behavior, like jquery support... is this any different from mixins?
6. Is there a difference between an app versus a microfront end or plugin/widget builds? Should micro front ends be able to talk to one another...
7. HOW  CAN LOKI COMPONENTS AND MICRO FRONTENDS PORT INTO ANGULAR AND REACT? CAN I TURN THEM INTO WEB COMPONENTS SOMEHOW? OR USE MUTATION OBSERVER?
8. Do we really need to execute events and code inside event handlers? Inside templates? What functions do templates need access to?
9. Configure _model field with loki config... or config function?