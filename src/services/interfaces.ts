export interface Bill {
  id?: string;
  clientId: string;
  name: string;
  value: string;
  expireDate: string;
  daysBeforeExpireDateToRemember?: string;
}

export interface Client {
  id?: string;
  name: string;
  cpf?: string;
  birthdate: string;
  email: string;
  phoneNumber: string;
  billsCount: string;
}
