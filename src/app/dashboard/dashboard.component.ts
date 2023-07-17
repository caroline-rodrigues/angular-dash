import { Component } from "@angular/core";
import { ChartType, LegendItem } from "../lbd/lbd-chart/lbd-chart.component";
import { Task } from "../lbd/lbd-task-list/lbd-task-list.component";

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

  rows: Row[];
  headerRow: string[] = [
    "ID",
    "Nome",
    "CPF",
    "Data devolução",
    "Modelo",
    "Situação",
    "Ações",
  ];

  public tasks: Task[];
  ngOnInit() {
    this.rows = [
      {
        rent: {
          _id: "1",
          endDate: "2023-07-20",
          situation: "active",
        },
        client: {
          name: "John Doe",
          cpf: "12345678901",
        },
        vehicle: {
          brand: "Toyota",
        },
      },
      {
        rent: {
          _id: "2",
          endDate: "2023-07-22",
          situation: "inactive",
        },
        client: {
          name: "Jane Smith",
          cpf: "98765432109",
        },
        vehicle: {
          brand: "Honda",
        },
      },
      {
        rent: {
          _id: "3",
          endDate: "2023-07-25",
          situation: "active",
        },
        client: {
          name: "Michael Johnson",
          cpf: "45678912304",
        },
        vehicle: {
          brand: "Ford",
        },
      },
      {
        rent: {
          _id: "4",
          endDate: "2023-07-30",
          situation: "inactive",
        },
        client: {
          name: "Emily Davis",
          cpf: "65432198706",
        },
        vehicle: {
          brand: "Chevrolet",
        },
      },
      {
        rent: {
          _id: "5",
          endDate: "2023-08-02",
          situation: "active",
        },
        client: {
          name: "Daniel Wilson",
          cpf: "78912345603",
        },
        vehicle: {
          brand: "Volkswagen",
        },
      },
    ];

    this.graphType = ChartType.Pie;
    this.dataGraph = {
      labels: ["62%", "32%", "6%"],
      series: [62, 32, 6],
    };
    this.dataGraphInfo = [
      { title: "Open", imageClass: "fa fa-circle text-info" },
      { title: "Bounce", imageClass: "fa fa-circle text-danger" },
      { title: "Unsubscribe", imageClass: "fa fa-circle text-warning" },
    ];
  }
}
