interface RentDto {
  id?: string;
  clientId: string;
  vehicleId: string;
  situation?: string;
  dailyValue?: number;
  freeKm?: number;
  excedentKm?: number;
  startDate?: string;
  endDate?: string;
  totalValue?: number;
  validity?: string;
  otherExpenses?: number;
  discounts?: number;
  totalReceivable?: number;
  extraHour?: string;
  securityCode?: string;
  card?: string;
  cardNumber?: string;
  aboutRent?: string;
  aboutCard?: string;
  franchise?: string;
  exitTime?: string;
  arrivalTime?: string;
  occurrences?: OccurrenceDto[];
}
