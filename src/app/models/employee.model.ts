// EXPLAINED
// Models should be declared in interfaces and not in classes when no type checks and
// underlying business logic are to be implemented
export interface Employee {
  id?: number;
  firstName?: string;
  lastName?: string;
  salary?: number;
  currency?: Currency;
  status?: Status;
  description?: string;
}

export enum Status {
  IC, IN, CONS, RETIRED
}

export interface Currency {
  currencyCode?: string;
  currencySymbol?: any
}