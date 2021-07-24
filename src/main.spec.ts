import { countDuplicates } from './main';

test('should return json of duplicates', () => {
  const data = 'Foo';
  let result = countDuplicates(data);
  expect(JSON.parse(result)).toStrictEqual({ o: 2 });
});

test('should return empty object given empty string', () => {
  const data = '';
  let result = countDuplicates(data);
  expect(JSON.parse(result)).toStrictEqual({});
});
