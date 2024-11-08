export interface IUserInfo {
    name: string;
    img?: string;
    language?: string;
    timeZone?: string;
    contacts: Array<{
        type: 'mail' | 'phone' | 'loc',
        value: string;
    }>
}