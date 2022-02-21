import Validator from '../js/Validator';

test('check word, number, -, _', () => {
  const validation = new Validator('ssjhga312_-_37-asd-_4s');
  const recieved = validation.validateUsername();
  expect(recieved).toBe(true);
});

test('check wrong symbol `', () => {
  const validation = new Validator('jb43`dsf_jh');
  const recieved = validation.validateUsername();
  expect(recieved).toBe(false);
});

test('check >3 digits in a row', () => {
  const validation = new Validator('ssjhga3121_-_37-asd-_4s');
  const recieved = validation.validateUsername();
  expect(recieved).toBe(false);
});

test('check wrong first symbol', () => {
  const validation = new Validator('1ssjhga312_-_37-asd-_4s');
  const recieved = validation.validateUsername();
  expect(recieved).toBe(false);
});

test('check wrong last symbol', () => {
  const validation = new Validator('ssjhga312_-_37-asd-_4s_');
  const recieved = validation.validateUsername();
  expect(recieved).toBe(false);
});
