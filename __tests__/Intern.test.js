const Intern = require('../lib/Intern');

test("creates intern object", () => {
  const intern = new Intern("Lisseth", "11", "lissdiaz15@gmail.com", "UofU");

  expect(intern.school).toBe("UofU");
});

test("gets school", () => {
  const intern = new Intern("Lisseth", "11", "lissdiaz15@gmail.com", "UofU");

  expect(intern.getSchool()).toBe("UofU")
});

test("gets role", () => {
  const intern = new Intern("Lisseth", "11", "lissdiaz15@gmail.com", "UofU");

  expect(intern.getRole()).toBe("Intern");
});