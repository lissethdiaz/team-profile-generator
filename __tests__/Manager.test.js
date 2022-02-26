const Manager = require('../lib/Manager');

test("creates manager object", () => {
  const manager = new Manager("Lisseth", "11", "lissdiaz15@gmail.com", "4");

  expect(manager.officeNumber).toBe("4");
});

test("gets role", () => {
  const manager = new Manager("Lisseth", "11", "lissdiaz15@gmail.com", "4");

  expect(manager.getRole()).toBe("Manager");
});

