export interface Bill {
    clientId: string;
    name: string;
    value: string;
    expireDate: string;
    daysBeforeExpireDateToRemember?: string;
}