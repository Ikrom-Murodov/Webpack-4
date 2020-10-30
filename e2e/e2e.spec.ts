import { HOST, PORT } from '../webpack/constans';

describe('Form testing.', () => {
  beforeAll(async () => {
    await page.goto(`http://${HOST}:${PORT}/`);
  });
});
