# Resumr

**Resumr** is my personal static website created with ViteJS, React, TypeScript and Tailwind. Its design is largely inspired by [Mapstr](https://mapstr.com/) and aims to present myself in a fun way.

## Running the application

Simply run the following:

```bash
yarn install
yarn dev
```

# QA and CI/CD

GitHub actions are used to ensure the code quality and to deploy the application. Two pipelines are currently developed:

- [QA](.github/workflows/qa.yml): Checks linter and formatter.
- [Deploy](.github/workflows/deploy.yml): Builds the application and deploys it to GitHub Pages.
