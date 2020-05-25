// Ядро
import DevServer from 'webpack-dev-server';
import Webpack from 'webpack';
import chalk from 'chalk';

// Конфигурационный файл для режима разработки
import getDevConfig from './config/webpack.dev';

// Константы
import { HOST, PORT } from './constans';

// Компилятор webpack
const compiler = Webpack(getDevConfig());

// Сервер
const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  open: true,
});

// 'Прослушивание' сервера
server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('Server listen on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`
    )}`
  );
});
