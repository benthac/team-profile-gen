const Engineer = require('../lib/engineer');

test('has a GitHub name', () => {
    const engineer = new Engineer('Ryan', '16', 'ryan@ryanjob.com', 'Ryangit');

    expect(engineer.gitHub).toBe('gitHub');
});