import { path as PROJECT_ROT } from 'app-root-path';
import { join } from 'path';

const SOURCE_DIRECTORY = join(PROJECT_ROT, 'src');
const BUILD_DIRECTORY = join(PROJECT_ROT, 'dist');
const HOST = 'localhost';
const PORT = 3000;

export { SOURCE_DIRECTORY, BUILD_DIRECTORY, HOST, PORT, PROJECT_ROT };
