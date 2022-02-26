const Employee = require('../lib/Employee');

test("creates employee object", () => {
  const employee = new Employee('Lisseth', '11', 'lissdiaz15@gmail.com');

  expect(employee.name).toBe('Lisseth');
  expect(employee.id).toBe('11');
  expect(employee.email).toBe('lissdiaz15@gmail.com');
});

test("gets employee's name", () => {
  const employee = new Employee('Lisseth', '11', 'lissdiaz15@gmail.com');

  expect(employee.getName()).toBe('Lisseth');
});

test("gets employee's id", () => {
  const employee = new Employee('Lisseth', '11', 'lissdiaz15@gmail.com');

  expect(employee.getId()).toBe('11');
});

test("gets employee's email", () => {
  const employee = new Employee('Lisseth', '11', 'lissdiaz15@gmail.com');

  expect(employee.getEmail()).toBe('lissdiaz15@gmail.com');
});

test("gets role", () => {
  const employee = new Employee('Lisseth', '11', 'lissdiaz15@gmail.com');

  expect(employee.getRole()).toBe('Employee');
});