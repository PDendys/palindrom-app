const checkIsPalindrome: Function = (word: string): boolean => {
    const trimmedSentence: string = word.split(' ').join('').toLowerCase();
    return trimmedSentence === trimmedSentence.split('').reverse().join('');
};

export {
    checkIsPalindrome
}