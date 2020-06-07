import { checkIsPalindrome } from 'helpers';

describe('test "checkIsPalindrome()" method', () => {
    const palindromSentence = 'Kobyła ma mały bok';
    const nonPalindromSentence = 'Duża kobyła ma średni bok';

    it(`should return true for "${palindromSentence}" sentence`, () => {
        expect(checkIsPalindrome(palindromSentence)).toBe(true);
    });

    it(`should return false for "${nonPalindromSentence}" sentence`, () => {
        expect(checkIsPalindrome(nonPalindromSentence)).toBe(false);
    });
})