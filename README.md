# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Assessment specific details

- Initialized repository on Git.
- Looked into using the best starter kit for React. Found create-react-app (CRA), and vite as simple options. Choose vite for its efficient and faster bundling and deployment times over CRA (which uses webpack under the hood).
- Found a simple guide for deploying this website on AWS amplify as P0. For P1, If I can, I'll write CDK code that can help keep track of and automate other infrastructure deployments.
- Added support for the following developer tooling:
  - ESlint
  - Prettier + Autoformatting
  - Absolute paths in workspace
- Implemented a redux store for the app, with a fake response.

- Added AntD as the design UI Library for building the UI.
- Based on the mocks, created a responsive layout for the app by using containers and avoiding absolute pixel dimensions as far as possible.
- Added loading skeletons for a better UI experience.
- Added sorting capabilities on the table.
- Added a basic graph for the retail sales by month and year.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
