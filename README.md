# Ng5

A small Angular demo app ("Telcell") with a Bootstrap navbar, a welcome page and two lazy-loaded feature areas. Built with [Angular](https://angular.dev) 20 and the Angular CLI.

## Requirements

- Node.js `^20.19`, `^22.12` or `^24` (an Angular 20 requirement)
- npm
- Google Chrome, for running the unit tests

Install dependencies:

```bash
npm install
```

## Scripts

| Command         | What it does                                                        |
| --------------- | ------------------------------------------------------------------- |
| `npm start`     | Dev server at http://localhost:4200/, reloads on file changes       |
| `npm run build` | Production build into `dist/`                                       |
| `npm test`      | Unit tests with Karma and Jasmine (watch mode)                      |
| `npm run lint`  | ESLint via [angular-eslint](https://github.com/angular-eslint/angular-eslint) |

For a development build, use `npx ng build --configuration development`. To run the tests once without opening a browser window, as you would in CI:

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```

## Routes

| Path                   | Page                         |
| ---------------------- | ---------------------------- |
| `/`                    | Redirects to `/welcome`      |
| `/welcome`             | Main welcome page            |
| `/module1/welcome`     | Module 1 welcome (lazy)      |
| `/module1/list`        | Module 1 list (lazy)         |
| `/module2/dashboard`   | Module 2 dashboard (lazy)    |
| `/module2/dashboard/1` | Module 2 dashboard 1 (lazy)  |
| anything else          | Not-found page               |

## Project structure

```
src/
  main.ts                  bootstraps AppComponent with appConfig
  app/
    app.config.ts          application providers (router, change detection)
    app.routes.ts          top-level routes; lazy-loads module1 and module2
    app.component.*        root component: navbar and <router-outlet>
    main.component.ts      /welcome page
    notFound.component.ts  fallback page for unknown routes
    module1/               welcome and list pages, module1.routes.ts
    module2/               dashboard pages, module2.routes.ts
  environments/            environment.ts, swapped for environment.prod.ts in production builds
  styles.less              global styles
```

All components are standalone. Styles use Less, and Bootstrap 4 is loaded from a CDN in `src/index.html`.

## Generating code

```bash
npx ng generate component module1/my-page
```

Then add a route for the new component in the matching `*.routes.ts` file.
