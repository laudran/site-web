# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about nuxt.

## Setup

### Install Nodejs and yarn

[Make sure to have Node > 16.x installed](https://nodejs.org/en/download)

Install yarn next
```bash
npm install --global yarn
```

### Install dependencies
Make sure to install the dependencies:

```bash
yarn install
```

## Contribution

This app uses [Nuxt3](https://nuxt.com/docs/getting-started/introduction) and is served as a static website.

For this you will need to understand the [website structure](https://nuxt.com/docs/guide/directory-structure/nuxt) as well as [Vue.js](https://vuejs.org/guide/introduction.html) with composition api.

### Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

This will let you display the app on your browser and will also hot reload on changes.



## Production

Application is compiled automatically on github with github actions.

You can still have a preview of how it runs with the following commands.

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```