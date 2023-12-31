interface VehicleDto {
  name: string;
  plate: string;
  year: number;
  brand: string;
  color: string;
  maintenance?: boolean;
  chassi: string;
  occurrences: OccurrenceDto[];
  purchaseDate: string;
}
