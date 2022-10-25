export interface Employee {
  id?: number;
  firstName?: string;
  lastName?: string;
  salary?: number;
  currency?: Currency;
  status?: Status;
}

export enum Status {
  IC, IN, CONS, RETIRED
}

export interface Currency {
  currencyCode?: string;
  currencySymbol?: any
}