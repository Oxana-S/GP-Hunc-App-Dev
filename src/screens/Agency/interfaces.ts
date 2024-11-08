export interface IAgencyInfo {
    name: string;
    img: string;
    contacts: Array<{
        type: 'mail' | 'phone' | 'loc',
        value: string;
    }>
}