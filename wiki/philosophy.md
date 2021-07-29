# Philosophy

## The Problem 

Modern frameworks provide overwhelming APIs and all but obfuscate the DOM away from developers. The do so for a variety of reasons:
1. To prevent developers from messing with the frameworks internals by accident
2. To enforce the frameowrk's ideologu of front-end architecture
3. To allow development across platforms

However, the cost of these benefits is high.
1. High barrier of entry - developers need to learn whole new ways of doing something they can already do with existing technologies
2. Increased application complexity - even for simpler apps, the minimal complexity is now the complexity of the framework
3. Increased cost of development - complex technology mandates hiring better and therefore more expensive talent
4. Huge bundle sizes and performance premiums - these complex and huge solutions are simply an overkill for small to mid sized apps, and for libraries that are meant to be building blocks in bigger front end eco-systems
5. Ecosystem entrapment - finally when all your components and applications are built in a specific framework, and all your team is trained in it, it is hard to change course

These downsides are hardly worth the beenfits that modern SPA frameworks offer if your product is small to medium sized, and only meant for the web. Even if your product is enterprise grade, it hardly makes sense to develop component libraries and small micro front-ends with hefty frameworks that are hard to plugin across different apps build in different framworks.

## The Solution

Loki offers a solution to these challenges. Lightweight and unopinionated, Loki allows building micro front-ends, component libraries and lightweight SPAs via an API that is simple and intutive. 

### The Philosophy
1. Let the DOM shine 
2. APIs that enable developers to dive deeper only when needed 
3. Tiny bundles
4. Plug your loki apps into any modern framework!

Instead of abtracting the DOM away, Loki let's the standard DOM APIs shine, allowing developers to leverage existing knowledge with the added structure and benefits that modern SPA frameworks offer. And bevause we don't re-create the functionality that native broswer APIs already offer, you can expect bundle sizes that are nimble, which makes them perfect for developing micro front-ends and component libraries.
