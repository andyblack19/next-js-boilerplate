## Getting Started

### Requirements

Install [Node.js and npm](https://nodejs.org/en/download) (Choose the latest LTS version)

### Running Locally

Navigate to the folder and run the below commands to install dependencies and run the app locally in dev mode with live reload. Then open http://localhost:3000 in your favorite browser to view the site.

```shell
npm install
npm run dev
```

### Production Builds

Run the below command to create an optimised production build. Once build, the app is ready to be deployed - all generated files are located at `out` folder, which you can deploy with any hosting service.

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove any unused CSS from [Tailwind CSS](https://tailwindcss.com).

```shell
npm run build-prod
```

You can also run the project locally in production mode using:

```shell
$ npm run build
$ npm run start
```

## Visual Studio Code Extensions

When you open this folder in VSCode, it will offer to install some useful extensions for contributing (listed in `.vscode/extension.json`). With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

## Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

## Installed Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generation. Including:
  - ☕ Minify HTML & CSS
  - 💨 Live reload
  - ✅ Cache busting
- 🔥 Type checking with [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 🔍 Visual testing with  (Optional)
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)