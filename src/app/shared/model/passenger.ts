

export interface Ipassenger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null | Array<IPassChild>;
}

export interface IPassChild{
    name : string; age : number;
}