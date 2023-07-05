export class Rent {
  _id: string;
  clientId: string;
  vehicleId: string;
  dailyValue: number;
  freeKm: number;
  excedentKm: number;
  startDate: string;
  endDate: string;
  totalValue: number;

  constructor(data?: Partial<Rent>) {
    Object.assign(this, data);
  }
}
