# Webpack Template

## Оглавление

- [Предварительные требования](#предварительные-требования)
- [Немного о сборке](#немного-о-сборке)
- [Начало работы](#начало-работы)
- [Структура папок](#структура-папок)
  - [Структура корневой директории](#вся-структура-корневой-директории-этого-приложения-объясняется-ниже)
  - [Структура src директории](#вся-структура-src-директории-этого-приложения-объясняется-ниже)
  - [Структура webpack директории](#вся-структура-webpack-директории-этого-приложения-объясняется-ниже)
- [Npm Скрипты](#npm-скрипты)
- [Зависимости](#зависимости)

# Предварительные требования

Чтобы собрать и запустить этот проект локально, вам понадобиться сделать несколько шагов:

- Установить [Node.js](https://nodejs.org/en/)
- Установить [VS Code](https://code.visualstudio.com/)

# Немного о сборке

В этой сборке используется Webpack версии 4.43.0. В место [webpack-cli](https://webpack.js.org/api/cli/) используется [Node Interface](https://webpack.js.org/api/node/). Данная сборка поддерживает такие файлы как: .sass, .scss, .css, .js, .ts, .pug, .html .jpg, .png, .jpeg, .svg, .woff2, .woff, .eot, .ttf. Также данная сборка использует кэширование [caching](https://webpack.js.org/guides/caching/) и [code-splitting](https://webpack.js.org/guides/code-splitting/) и умеет сжимать и минифицировать код.

# Начало работы

- Клонировать репозиторий

```
git clone https://github.com/Ikrom-Murodov/Webpack-4.git
```

- Установите зависимости

```
cd Webpack-4
yarn
```

- Собирать проект

```
yarn run build
```

- Запустить проект

```
yarn run dev
```

# Структура папок

#### Вся структура корневой директории этого приложения объясняется ниже:

| Имя               | Описание                                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **node_modules**  | Содержит все ваши npm зависимости                                                                                                                           |
| **dist**          | Содержит файлы, готовые к использованию(выходные). Ваш код, который вы используйте в `production`                                                           |
| **src**           | Содержит ваш исходный код, который будет скомпилирован в директорию /dist/                                                                                  |
| **typings**       | Хранит .d.ts файлы декларации, которые не были найдены в DefinitelyTyped.                                                                                   |
| **webpack**       | Содержит все файлы и папки для конфигурации webpack                                                                                                         |
| .babelrc          | Конфигурационный файл babel [узнать больше](https://babeljs.io/docs/en/config-files)                                                                        |
| .browserslistrc   | Конфигурация для совместного использования целевых браузеров и версий Node.js                                                                             
|
| .editorconfig     | EditorConfig это конфигурационный файл и набор расширений, к большому количеству редакторов кода и IDE                                                     
|
| .eslintignore     | Конфиг настроек для ESLint, пути, которые будут исключены из линтинга(т.е. игнорируются, и линтер на них не действует)                                      |
| .eslintrc         | Конфиг настроек для ESLint, определяющий стиль написания кода                                                                                               |
| .gitignore        | Не отслеживать изменение в файлах с помощью git                                                                                                             |
| .prettierrc       | Конфигурационный файл prettier                                                                                                                              |
| package.json      | Файл, содержащий npm зависимости                                                                                                                            |
| postcss.config.js | Конфигурационный файл postcss                                                                                                                               |
| tsconfig.json     | Конфиг настроек для компиляции TypeScript в JavaScript                                                                                                      |
| yarn.lock         | Yarn необходимо точное указание версии для каждой установленной зависимости. Для этого Yarn использует файл `yarn.lock` в корневом каталоге вашего проекта. |

#### Вся структура src директории этого приложения объясняется ниже:

| Имя            | Описание                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------- |
| **src/css**    | Содержит все ваши исходные css стили                                                         |
| **src/fonts**  | Содержит все ваши исходные шрифты                                                            |
| **src/images** | Содержит все ваши исходные изображение                                                       |
| **src/js**     | Содержит все ваши исходные JavaScript скрипты                                                |
| **src/pug**    | Содержит все ваши исходные pug шаблоны, которые потом будут скомпилированы в .html файл      |
| **src/sass**   | Содержит все ваши исходные sass стили, которые потом будут скомпилированы в .css файл        |
| **src/ts**     | Содержит все ваши исходные TypeScript скрипты, которые потом будут скомпилированы в .js файл |

#### Вся структура webpack директории этого приложения объясняется ниже:

| Имя                            | Описание                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **webpack/config**             | Содержит все ваши конфигурационные файлы webpack                                                                                                                                      |
| webpack/config/webpack.base.js | Базовый конфигурационный файл webpack, от которой будут 'наследоваться' другие конфигурационные файлы webpack                                                                         |
| webpack/config/webpack.dev.js  | Конфигурационный файл webpack-для режима разработки, который 'наследуется' от webpack.base.js                                                                                         |
| webpack/config/webpack.prod.js | Конфигурационный файл webpack-для режима загрузки (production), который ‘наследуется’ от webpack.base.js                                                                              |
| **webpack/modules**            | Содержит все конфигурационные модули webpack                                                                                                                                          |
| webpack/modules/base           | Содержит базовые модули, которые будут использоваться в файле - webpack/config/webpack.base.js                                                                                        |
| webpack/modules/dev            | Содержит модули, которые будут использованы в режиме разработки (development) в файле - webpack/config/webpack.dev.js                                                                 |
| webpack/modules/prod           | Содержит модули, которые будут использованы в режиме загрузки (production) в файле - webpack/config/webpack.prod.js                                                                   |
| **webpack/plugins**            | Содержит все конфигурационные плагины webpack                                                                                                                                         |
| webpack/plugins/base           | Содержит базовые плагины, которые будут использоваться в файле - webpack/config/webpack.base.js                                                                                       |
| webpack/plugins/dev            | Содержит плагины, которые будут использованы в режиме разработки (development) в файле - webpack/config/webpack.dev.js                                                                |
| webpack/plugins/prod           | Содержит плагины, которые будут использованы в режиме загрузки (production) в файле - webpack/config/webpack.prod.js                                                                  |
| webpack/constans.js            | Содержит пути к таким директориям как, SOURCE_DIRECTORY, BUILD_DIRECTORY и их можно настроить под себя, то есть можно указать путь сборки проекта, изменив переменную BUILD_DIRECTORY |
| webpack/dev.js                 | Содержит настройки, тому как webpack должен работать в режиме разработки (development), а также получает конфигурационный файл webpack (webpack/config/webpack.dev.js)                |
| webpack/prod.js                | Содержит настройки тому как webpack должен работать в режиме загрузки (production) а также получает конфигурационный файл webpack (webpack/config/webpack.prod.js)                    |
| **webpack/helper**             | Содержит все плагины (plugins) и погрузчики (loaders) которые повторяются в конфигурационных файлах webpack                                                                           |

# Npm Скрипты

| Имя скрипта | Описание                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dev         | (yarn run dev) Webpack запустить проект в режиме разработки (development)                                                                                                        |
| build       | (yarn run build) Webpack начнет собирать проект в режиме загрузки (production)                                                                                                   |
| lint       | (yarn run lint) Eslint начинает проверять код

# Зависимости

## `devDependencies`

| Пакет                           | Описание                                                                                                                                                                                                                                                                                     |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @babel/cli                      | Пакет [@babel/cli](https://babeljs.io/docs/en/babel-cli) обеспечивает возможность работы с babel через терминал. Предоставляет командную утилиту babel                                                                                                                                       |
| @babel/core                     | Пакет [@babel/core](https://babeljs.io/docs/en/babel-core) содержит код, который выполняет всю работу по трансляции, но не содержит внутри себя правил преобразования. Правила описаны в отдельных пакетах, называемых плагинами                                                             |
| @babel/preset-env               | [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) Пресет - это группа плагинов, которую можно подключить к Babel целиком. _preset-env_ - основной пресет поддерживаемый командой Babel, который содержит внутри себя плагины, реализующие стандартизированные возможности js. |
| app-rot-path                    | Этот простой модуль [app-root-path](https://www.npmjs.com/package/app-root-path) помогает вам получить доступ к корневому пути вашего приложения                                                                                                                                             |
| autoprefixer                    | [autoprefixer](https://github.com/postcss/autoprefixer) Является плагином postcss, он нужен для того, чтобы автоматически добавлять префиксы                                                                                                                                                 |
| babel-loader                    | Babel загрузчик для webpack [узнать больше](https://github.com/babel/babel-loader)                                                                                                                                                                                                           |
| chalk                           | [Сhalk](https://github.com/chalk/chalk) Перекрашивает текст разными цветами в терминале                                                                                                                                                                                                      |
| clean-webpack-plugin            | [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) Плагин webpack для удаления ваших папок                                                                                                                                                                             |
| css-loader                      | [css-loader](https://webpack.js.org/loaders/css-loader/) Переводит css в CommonJS                                                                                                                                                                                                            |
| css-mqpacker                    | [css-mqpacker](https://github.com/lipemat/css-mqpacker) Является плагином postcss, он нужен для того, чтобы упаковывает медиазапросы                                                                                                                                                         |
| cssnano                         | [cssnano](https://cssnano.co/guides/getting-started/) Является плагином postcss, он нужен для того, чтобы минифицировать код css                                                                                                                                                             |
| eslint                          | [ESLint](https://eslint.org/) - это инструмент статического анализа кода для выявления проблемных шаблонов                                                                                                                                                                                   |
| eslint-config-airbnb-typescript | [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) Конфигурация Airbnb ESLint с поддержкой TypeScript                                                                                                                                            |
| esm                             | [esm](https://github.com/standard-things/esm) - самый совершенный в мире загрузчик модулей ECMAScript. Этот быстрый, готовый к работе загрузчик с нулевой зависимостью - это все, что вам нужно для поддержки модулей ECMAScript в Node 6+                                                   |
| file-loader                     | [file-loader](https://webpack.js.org/loaders/file-loader/) Загрузчик файлов преобразует import / require () для файла в URL и отправляет файл в выходной каталог.                                                                                                                            |
| html-webpack-plugin             | [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) Это плагин для webpack, который упрощает создание HTML-файлов для обслуживания ваших пакетов webpack                                                                                                                  |
| image-webpack-loader            | [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) Модуль загрузки изображений для webpack, которая делает минификация PNG, JPEG, GIF, SVG                                                                                                                             |
| mini-css-extract-plugin         | [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS.                                                                                           |
| node-sass                       | [node-sass](https://github.com/sass/node-sass) Node-sass - это библиотека, которая обеспечивает привязку Node.js к LibSass, C-версии популярного препроцессора таблиц стилей Sass.                                                                                                           |
| postcss-loader                  | [postcss-loader](https://github.com/postcss/postcss-loader) Загрузчик PostCSS для webpack                                                                                                                                                                                                    |
| prettier                        | [prettier](https://prettier.io/) Форматирует код                                                                                                                                                                                                                                             |
| pug                             | Нужен для webpack                                                                                                                                                                                                                                                                            |
| pug-loader                      | [pug-loader](https://github.com/pugjs/pug-loader) Компилирует pug в html                                                                                                                                                                                                                     |
| sass-loader                     | [sass-loader](https://github.com/webpack-contrib/sass-loader) Компилирует Sass в css                                                                                                                                                                                                         |
| source-map-loader               | [source-map-loader](https://github.com/webpack-contrib/source-map-loader) Извлеките комментарии sourceMappingURL                                                                                                                                                                             |
| style-loader                    | [style-loader](https://github.com/webpack-contrib/style-loader) Автоматически внедряет стили в DOM, используя несколько style style                                                                                                                                                          |
| typescript                      | [typescript](https://www.typescriptlang.org/) Позволять использовать TypeScrpt локально                                                                                                                                                                                                      |
| webpack                         | [webpack](https://webpack.js.org/) Позволять использовать webpack локально                                                                                                                                                                                                                   |
| webpack-dev-server              | [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)                                                                                                                                                                                                                       |
| webpack-merge                   | [webpack-merge](https://github.com/survivejs/webpack-merge) 'Склеивает' несколько объектов                                                                                                                                                                                                   |
