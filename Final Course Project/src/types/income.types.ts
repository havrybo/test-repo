export interface Income {
    id?: string;
    date: string;
    income: string;
    currency: string;
    comment?: string;
    cash: boolean;
    userID?: string;
}
