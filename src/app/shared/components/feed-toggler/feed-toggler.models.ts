export enum ToggleType {
    PROFILE = 'profileFeed',
    GLOBALFEED = 'globalFeed',
}

export interface ToggleOptions {
    firstLink: {text: string; link: string};
    secondLink: {text: string; link: string};
}
