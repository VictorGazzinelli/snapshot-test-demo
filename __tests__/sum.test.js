const sum = require('../sum');

test('snapshot test for sum function', () => {
    expect(sum(1, 2)).toMatchSnapshot();
});

test('other snapshot test for sum function', () => {
    expect(sum(3, 4)).toMatchSnapshot();
});
