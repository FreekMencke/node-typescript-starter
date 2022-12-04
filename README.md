![CI](https://github.com/FreekMencke/node-typescript-starter/workflows/CI/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/FreekMencke/node-typescript-starter.svg)](https://github.com/FreekMencke/node-typescript-starter/issues)
[![GitHub license](https://img.shields.io/github/license/FreekMencke/node-typescript-starter.svg)](https://github.com/FreekMencke/node-typescript-starter/blob/master/LICENSE)

# Node TypeScript Starter

Since I make a lot of projects, I created this **Node TypeScript Starter** to easily create a new Node project with TypeScript.

## Getting started

- `git clone https://github.com/FreekMencke/node-typescript-starter.git`
- `npm install`
- `npm start`

The application will build and run the **Node Typescript Starter**.

## Features

- Strict TSConfig
- [esbuild](https://esbuild.github.io/)
- ESLint
- EditorConfig
- Separate Dev/Prod config files
- Docker support
- Github Action CI

### Analyzing your bundle

With esbuild we can generate a `meta.json` file using the `npm run build:meta` or `npm run build:meta:prod` commands, which we can then can be uploaded to [Bundle Buddy](https://bundle-buddy.com/esbuild) to perform a detailed bundle analasys.

