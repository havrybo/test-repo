export interface Report {
    id?: string;
    date: string;
    quarter: number;
    incomes: number;
    expenses: number;
    flatTax: number;
    flatTaxQ: number;
    ssp: number;
    vat: number;
    militaryTax?: number;
    submitted?: boolean;
}
