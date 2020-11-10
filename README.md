# Webpack Template

## Table of contents.

- [Pre requisites](#pre-requisites)
- [A little about the assembly.](#a-little-about-the-assembly)
- [Beginning of work.](#beginning-of-work)
- [Folder structure](#folder-structure)
  - [Root directory structure](#the-entire-root-directory-structure-of-this-application-is-explained-below)
  - [Src directory structure](#the-entire-src-directory-structure-of-this-application-is-explained-below)
  - [Webpack directory structure](#the-entire-webpack-directory-structure-of-this-application-is-explained-below)
- [Npm scripts](#npm-scripts)
- [Dev dependencies](#devdependencies)

# Pre requisites.

To build and run this project locally you need [Node.js](https://nodejs.org/en/).

# A little about the assembly.

This project uses webpack version 4.43.0. Instead of [webpack-cli](https://webpack.js.org/api/cli/), 
[Node Interface](https://webpack.js.org/api/node/) is used.
This assembly supports files such as: .sass, .scss, .css, .js, .ts, .pug, .html .jpg, .png, .jpeg, .svg,
.woff2, .woff, .eot, .ttf.
This assembly also uses [caching](https://webpack.js.org/guides/caching/)  and 
[code-splitting](https://webpack.js.org/guides/code-splitting/)  and can compress and minify code.
[Jest](https://jestjs.io/) is used as  a framework for unit testing and 
[jest](https://jestjs.io/) and [puppeteer](https://pptr.dev/) are used for testing e2e.



# Beginning of work.

- Clone the repository.

```
git clone https://github.com/Ikrom-Murodov/Webpack-4.git
```

- Install dependencies.

```
cd Webpack-4
yarn
```

- Build project.

```
yarn run build
```

- Run the project.

```
yarn run dev
```

# Folder structure

#### The entire root directory structure of this application is explained below:

| Name                      | Description                                                                                                                                                 |
| --------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **node_modules**          | Contains all your npm dependencies.                                                                                                                         |
| **dist**                  | Contains files ready to use (output). Your code that you use in `production`                                                                                |
| **src**                   | Contains all the source code for your application                                                                                                           |
| **typings**               | Stores .d.ts declaration files that were not found in DefinitelyTyped.                                                                                      |
| **webpack**               | Contains all files and folders for webpack config.                                                                                                          |
| .browserslistrc           | Configuration for sharing target browsers and Node.js versions.                                                                                             |
| .editorconfig             | EditorConfig is a configuration file and a set of extensions to many code editors and IDEs                                                                  |
| .eslintignore             | Configuring settings for ESLint, paths that will be excluded from linting (i.e. ignored and the linter does not affect them)                                |
| .eslintrc                 | Settings config for ESLint that determines the style of coding                                                                                              |
| .gitignore                | Don't track change in files with git                                                                                                                        |
| .prettierrc               | Prettier config file                                                                                                                                        |
| .babel.config.js          | Configuration file for babel [learn more](https://babeljs.io/docs/en/config-files)                                                                          |
| .jest.config.js           | Configuration file for Jest.                                                                                                                                |
| jest.puppeteer.config.js  | Configuration file for jest and puppeteer.                                                                                                                  |
| package.json              | File containing npm dependencies                                                                                                                            |      
| postcss.config.js         | Postcss config file                                                                                                                                         |
| tsconfig.json             | Configuration file for TypeScript.                                                                                                                          |
| yarn.lock                 | Yarn needs an exact version for each installed dependency. To do this, Yarn uses the `yarn.lock` file in your project's root directory.                     |


#### The entire src directory structure of this application is explained below:

| Name            | Description                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------------|
| **src/css**    | Contains all your original css styles                                                            |
| **src/fonts**  | Contains all your original fonts                                                                 |
| **src/images** | Contains all your original images                                                                |
| **src/pug**    | Contains all your original  pug template, which will then be compiled into a .html file          |
| **src/sass**   | Contains all your original sass styles,  which will then be compiled into a .css  file           |
| **src/ts**     | Contains all your original TypeScript scrips, which will then be compiled into a .js file        |

#### The entire webpack directory structure of this application is explained below:

| Name                           | Description                                                                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **webpack/config**             | Contains all your webpack config files.                                                                                                                                                      |
| webpack/config/webpack.base.js | The base webpack config file from which other webpack config files will 'inherit'.                                                                                                           |
| webpack/config/webpack.dev.js  | Webpack config file for development mode that 'inherits' from webpack.base.js                                                                                                                |
| webpack/config/webpack.prod.js | Webpack config file for boot mode (production), which 'inherits' from webpack.base.js                                                                                                        |
| **webpack/modules**            | Contains all webpack config modules                                                                                                                                                          |
| webpack/modules/base           | Contains the base modules to be used in the file - webpack/config/webpack.base.js                                                                                                            |
| webpack/modules/dev            | Contains modules that will be used in development mode in a file - webpack/config/webpack.dev.js                                                                                             |
| webpack/modules/prod           | Contains modules to be used in production mode in a file - webpack/config/webpack.prod.js                                                                                                    |
| **webpack/plugins**            | Contains all webpack config plugins                                                                                                                                                          |
| webpack/plugins/base           | Contains basic plugins to be used in the file - webpack/config/webpack.base.js                                                                                                               |
| webpack/plugins/dev            | Contains plugins to be used in development mode in a file - webpack/config/webpack.dev.js                                                                                                    |
| webpack/plugins/prod           | Contains plugins to be used in production mode in a file - webpack / config / webpack.prod.js                                                                                                |
| webpack/constans.js            | Contains paths to directories such as SOURCE_DIRECTORY, BUILD_DIRECTORY and they can be customized, that is, you can specify the project build path by changing the BUILD_DIRECTORY variable |
| webpack/dev.js                 | Contains settings for how webpack should work in development mode, and also gets the webpack config file (webpack / config / webpack.dev.js)                                                 |
| webpack/prod.js                | Contains settings for how webpack should work in production mode and also gets the webpack config file (webpack / config / webpack.prod.js)                                                  |
| **webpack/helper**             | Contains all plugins and loaders that are repeated in webpack config files                                                                                                                   |

# Npm scripts

| Script name | Description                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------|
| dev         | (yarn run dev)        Webpack run project in development mode                                           |
| build       | (yarn run build)      Webpack will start building the project in production mode                        |
| lint        | (yarn run lint)       Eslint starts checking the code                                                   | 
| all-tests   | (yarn run all-tests)  Jest starts running all your tests                                                |        
| e2e-tests   | (yarn run e2e-tests)  Jest starts running your e2e-tests                                                |                                   

# devDependencies

| Package name                    | Description                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------
| @babel/cli                         [@babel/cli](https://babeljs.io/docs/en/babel-cli)                                                        |
| @babel/core                        [@babel/core](https://babeljs.io/docs/en/babel-core)                                                      |
| @babel/preset-env                  [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)                                          |
| @babel/preset-typescript           [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)                            |
| @types/expect-puppeteer                                                                                                                      |
| @types/jest                                                                                                                                  |
| @types/jest-environment-puppeteer                                                                                                            |
| @types/puppeteer                                                                                                                             |
| @typescript-eslint/eslint-plugin                                                                                                             |
| @typescript-eslint/parser          [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)                       |
| app-root-path                      [app-root-path](https://www.npmjs.com/package/app-root-path)                                              |
| autoprefixer                       [autoprefixer](https://github.com/postcss/autoprefixer)                                                   |
| babel-jest                         [babel-jest](https://github.com/babel/babel-jest)                                                         |
| babel-loader                       [узнать больше](https://github.com/babel/babel-loader)                                                    |
| chalk                              [Chalk](https://github.com/chalk/chalk)                                                                   |
| clean-webpack-plugin               [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)                                  |
| copy-webpack-plugin                [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)                             |
| css-loader                         [css-loader](https://webpack.js.org/loaders/css-loader/)                                                  |
| css-mqpacker                       [css-mqpacker](https://github.com/lipemat/css-mqpacker)                                                   |
| cssnano                            [cssnano](https://cssnano.co/guides/getting-started/)                                                     |
| eslint                             [ESLint](https://eslint.org/)                                                                             |
| eslint-config-airbnb-typescript    [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)            |
| eslint-plugin-jest                 [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                                |
| esm                                [esm](https://github.com/standard-things/esm)                                                             |
| file-loader                        [file-loader](https://webpack.js.org/loaders/file-loader/)                                                |
| html-webpack-plugin                [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)                                    |
| image-webpack-loader               [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)                                  |
| jest                               [jest](https://jestjs.io/)                                                                                |
| jest-puppeteer                     [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)                                           |
| mini-css-extract-plugin            [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)                     |
| node-sass                          [node-sass](https://github.com/sass/node-sass)                                                            |
| postcss-loader                     [postcss-loader](https://github.com/postcss/postcss-loader)                                               |
| prettier                           [prettier](https://prettier.io/)                                                                          |
| pug                                [pub](https://github.com/pugjs/pug)                                                                       |
| pug-loader                         [pug-loader](https://github.com/pugjs/pug-loader)                                                         |
| puppeteer                          [puppeteer](https://pptr.dev/)                                                                            |
| sass-loader                        [sass-loader](https://github.com/webpack-contrib/sass-loader)                                             |
| source-map-loader                  [source-map-loader](https://github.com/webpack-contrib/source-map-loader)                                 |
| style-loader                       [style-loader](https://github.com/webpack-contrib/style-loader)                                           |
| tslib                              [tslib](https://github.com/microsoft/tslib)                                                               |
| typescript                         [typescript](https://www.typescriptlang.org/)                                                             |
| webpack                            [webpack](https://webpack.js.org/)                                                                        |
| webpack-dev-server                 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)                                    |
| webpack-merge                      [webpack-merge](https://github.com/survivejs/webpack-merge)                                               |
