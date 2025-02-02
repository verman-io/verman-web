verman-web
==========

[![License](https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Frontend for verman. Framework agnostic (vanilla JavaScript; [Angular](https://en.wikipedia.org/wiki/Angular_(web_framework)); [Vue](https://en.wikipedia.org/wiki/Vue.js); or [React](https://en.wikipedia.org/wiki/React_(software))).

## Feature roadmap

  - [ ] [JSON](https://en.wikipedia.org/wiki/JSON) editor
  - [ ] Visualise [JSON](https://en.wikipedia.org/wiki/JSON) in an orgflow-style tree
  - [ ] Download edited [JSON](https://en.wikipedia.org/wiki/JSON)
  - [ ] Show what files are generated from the [JSON](https://en.wikipedia.org/wiki/JSON)
  - [ ] [busybox](https://www.busybox.net) + [`envsubst`](http://savannah.gnu.org/projects/gettext/) + [`jq`](https://jqlang.org) [WASM](https://en.wikipedia.org/wiki/WebAssembly) build for live execution of generator
  - [ ] Download generated files
  - [ ] Execute generated files in [WASM](https://en.wikipedia.org/wiki/WebAssembly)
  - [ ] Shareable link for JSON that; once visited; shows generated files in a tree and JSON hierarchy in an orgflow-style tree 

## Screenshots

(coming soon!)

## CLI & library

See https://github.com/SamuelMarks/libscript

---

# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

---

## License

Licensed under either of:

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or <https://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <https://opensource.org/licenses/MIT>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
licensed as above, without any additional terms or conditions.
