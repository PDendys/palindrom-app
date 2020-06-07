interface IPalindromItem {
    sentence: string,
    isPalindrome: boolean
}

interface IAuthSliceState {
    isAuth: boolean
}

interface IPalindromSliceState {
    list: IPalindromItem[]
}

interface IStore {
    auth: IAuthSliceState,
    palindrom: IPalindromSliceState
}

export {
    IPalindromItem,
    IPalindromSliceState,
    IStore
}