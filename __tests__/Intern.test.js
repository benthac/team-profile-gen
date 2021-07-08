const Intern = require('../lib/intern');

test('to include a school', () => {
    const intern = new Intern('Larry', '18', 'Larry@mail.com', 'school');

    expect(intern.school).toBe('school');
});