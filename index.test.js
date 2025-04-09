// const { Sum, substracte } = require('./index.js');

// test('sum of 1 and 2 to be equal to 3', () => {
//     expect(Sum(1, 2)).toBe(3);
// });

// test('2 minus 1 to be equal to 1', () => {
//     expect(substracte(2, 1)).toBe(1);
// });

// test('String + String', () => {
//     expect(Sum(test, 2)).toBe(3);
// });

const { Sum, substracte, divide } = require('./index.js');

test('sum of 1 and 2 to be equal to 3', () => {
    expect(Sum(1, 2)).toBe(3);
});

test('2 minus 1 to be equal to 1', () => {
    expect(substracte(2, 1)).toBe(1);
});

test('should throw error if arguments are not numbers', () => {
    expect(() => Sum("test", 2)).toThrow('Les deux arguments doivent être des nombres valides');
    expect(() => substracte(2, "x")).toThrow('Les deux arguments doivent être des nombres valides');
});

test('should throw error if arguments are NaN', () => {
    expect(() => Sum(NaN, 2)).toThrow('Les deux arguments doivent être des nombres valides');
    expect(() => substracte(2, NaN)).toThrow('Les deux arguments doivent être des nombres valides');
});

test('6 divided by 2 to be equal to 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('should throw error if divide by 0', () => {
    expect(() => divide(6, 0)).toThrow('Division par zéro interdite');
});

test('should throw error if arguments to divide are not numbers', () => {
    expect(() => divide("a", 2)).toThrow('Les deux arguments doivent être des nombres valides');
});
