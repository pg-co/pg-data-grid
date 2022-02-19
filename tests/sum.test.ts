import{sum} from '../src/jest_test';

it('should return the sum of two numbers', () => {
    expect(sum(1,3)).toBe(4);
    expect(sum(7,333)).toBe(340);
    expect(sum(43,323)).toBe(366);
});
