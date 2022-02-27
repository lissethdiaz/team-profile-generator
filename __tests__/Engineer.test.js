const Engineer = require('../lib/Engineer');

test("creates engineer object", () => {
  const engineer = new Engineer("Lisseth", "11", "lissdiaz15@gmail.com", "lissethdiaz");

  expect(engineer.github).toBe("lissethdiaz");
});

test("gets github", () => {
  const engineer = new Engineer("Lisseth", "11", "lissdiaz15@gmail.com", "lissethdiaz");

  expect(engineer.getGithub()).toBe("lissethdiaz")
});

test("gets role", () => {
  const engineer = new Engineer("Lisseth", "11", "lissdiaz15@gmail.com", "lissethdiaz");

  expect(engineer.getRole()).toBe("Engineer");
});