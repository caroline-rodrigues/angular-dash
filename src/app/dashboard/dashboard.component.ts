import { Component } from "@angular/core";
import { ClientService } from "app/client/client.service";
import { RentService } from "app/rent/rent.service";
import { VehicleService } from "app/vehicle/vehicle.service";
import { map } from "rxjs/operators";
import { ChartType, LegendItem } from "../lbd/lbd-chart/lbd-chart.component";

interface Row {
  rent?: {
    _id: string;
    endDate: string;
    situation: string;
  };
  client?: {
    name: string;
    cpf: string;
  };
  vehicle?: {
    brand: string;
  };
}

@Component({
  selector: "dashboard-cmp",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  public graphType: ChartType;
  public dataGraph: any;
  public dataGraphInfo: LegendItem[];
  public clients: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagesToShow: number = 3;
  searchQuery: string;
  totalPages: number;
  filteredRows: any[];
  totalPagesArray: any[] = [];
  rentList: any[] = [];
  available: any;
  rented: number;
  maintenance: number;
  showChart: boolean = false;
  inProgress: number;
  late: number;

  rows: Row[];
  headerRow: string[] = [
    "Cliente",
    "ID Cliente",
    "Carro",
    "STATUS",
    "Data Entrega",
  ];

  constructor(
    private clientService: ClientService,
    private rentService: RentService,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.getAll(false);
    this.findAllClients();
    this.vehiclesStatus();
    this.allRentStatus();
  }

  getAll(event: boolean) {
    this.rentService
      .getAll()
      .pipe(map((rentResponse) => rentResponse.filteredEntityResults))
      .subscribe((rentList) => {
        this.rentList = rentList;
        this.totalPages = Math.ceil(this.rentList.length / this.itemsPerPage);

        if (event && this.filteredRows.length === 1 && this.currentPage !== 1) {
          this.currentPage = this.totalPages;
        }

        this.filteredRows = this.paginate(this.rentList);
        this.totalPagesArray = this.calculateTotalPagesArray(
          this.currentPage,
          this.totalPages
        );
      });
  }

  paginate(data: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  calculateTotalPagesArray(currentPage: number, totalPages: number): number[] {
    const pagesArray: number[] = [];
    const startPage = Math.max(1, currentPage - this.pagesToShow);
    const endPage = Math.min(totalPages, currentPage + this.pagesToShow);

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filteredRows = this.paginate(this.rentList);
      this.totalPagesArray = this.calculateTotalPagesArray(
        this.currentPage,
        this.totalPages
      );
    }
  }

  findAllClients() {
    this.clientService.getAll().subscribe((client) => {
      this.clients = client.count;
    });
    return this.clients;
  }

  vehiclesStatus() {
    this.vehicleService.vehiclesStatus().subscribe((status) => {
      this.rented = status.rented;
      this.available = status.available;
      this.maintenance = status.maintenance;
      console.log(status);

      this.graphType = ChartType.Pie;
      this.dataGraph = {
        labels: [`${this.available}`, `${this.rented}`, `${this.maintenance}`],
        series: [this.available, this.rented, this.maintenance],
      };
      this.dataGraphInfo = [
        { title: "Alugados", imageClass: "fa fa-circle text-danger" },
        { title: "Disponíveis", imageClass: "fa fa-circle text-info" },
        { title: "Manutenção", imageClass: "fa fa-circle text-warning" },
      ];
      this.showChart = true;
    });
  }

  allRentStatus() {
    this.rentService.allRentStatus().subscribe((status) => {
      this.inProgress = status.inProgress;
      this.late = status.late;
    });
  }
}
