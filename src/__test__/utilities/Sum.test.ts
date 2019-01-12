import {sum} from '../../utilities/Sum'

test('Check sum on positive numbers', () => {
    expect(sum(1, 2)).toBe(3)
    });

test ('Check sum on one negative and one positive number', () => {
    expect(sum(3, -4)).toBe(-1)
    });

test ('Check sum on negative numbers', () => {
    expect(sum(-5, -9)).toBe(-14)
    });