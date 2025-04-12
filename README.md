# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```console
yarn
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```console
GIT_USER=robertjcolley yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Changing the theme

Use [Styling your site with Infirma](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to change [custom.css](./src/css/custom.css) variables.
