const calc = require('./subtract');

test("subtract 2 - 1 to be equals 1", () => {
    expect(calc(2,1)).toBe(1);
});
