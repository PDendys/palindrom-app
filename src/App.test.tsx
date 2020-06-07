import { checkIsPalindrome } from 'helpers';

describe('test "checkIsPalindrome()" method', () => {
    const palindromeSentence = 'Kobyła ma mały bok';
    const nonPalindromeSentence = 'Duża kobyła ma średni bok';

    it(`should return true for "${palindromeSentence}" sentence`, () => {
        expect(checkIsPalindrome(palindromeSentence)).toBe(true);
    });

    it(`should return false for "${nonPalindromeSentence}" sentence`, () => {
        expect(checkIsPalindrome(nonPalindromeSentence)).toBe(false);
    });
})