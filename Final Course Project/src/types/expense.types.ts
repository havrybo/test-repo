export interface Expense {
    id?: string;
    date: string;
    expense: string;
    currency: string;
    comment?: string;
    cash: boolean;
    userID?: string;
}
