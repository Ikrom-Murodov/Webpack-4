import { HOST, PORT } from '../webpack/constans';

beforeAll(async () => {
  await page.goto(`http://${HOST}:${PORT}/`);
});

test('test inputs', async () => {
  console.log(page.url());

  const value = {
    name: 'Ikrom',
    surname: 'Murodov',
    patronymic: 'Safarovich',
    age: '18',
  };

  await expect(page).toFillForm('form[name="test-form"]', value);
  await expect(page).toClick('input[class="form-check-input"]');
  await expect(page).toClick('button[type="submit"]');
});
