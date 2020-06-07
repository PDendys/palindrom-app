interface IPalindromeItem {
    sentence: string,
    isPalindrome: boolean
}

interface IAuthSliceState {
    isAuth: boolean
}

interface IPalindromeSliceState {
    list: IPalindromeItem[]
}

interface IStore {
    auth: IAuthSliceState,
    palindrome: IPalindromeSliceState
}

export {
    IPalindromeItem,
    IPalindromeSliceState,
    IStore
}