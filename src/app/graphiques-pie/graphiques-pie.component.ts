import { Component, OnInit } from '@angular/core';
import {Reservation} from '../reservation';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {ReservationService} from '../reservation.service';


@Component({
  selector: 'app-graphiques-pie',
  templateUrl: './graphiques-pie.component.html',
  styleUrls: ['./graphiques-pie.component.css']
})
export class GraphiquesPieComponent implements OnInit {

  constructor(private reservationService: ReservationService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  labels: Array<string> = [];
  reservation: Array<Reservation>;
  nbPassagers: Array<number> = [];

  /* Graphique en forme de tarte */

  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: ChartDataSets[] = [
    {data: [ ], label: 'Voyageur par Destination'},
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  ngOnInit(): void {
    this.getReservations();
  }
/* Réception des réservations */
  getReservations(): void {
    this.reservationService.getReservations()
      .subscribe(resultat => {
        this.reservation = resultat;
        this.getLabels();
        this.getValues();
        this.addValues();
      });
  }
  /* Réception des valeurs */
  getValues(): void {
    this.nbPassagers = new Array(this.labels.length).fill(0);

    this.reservation.map(reservation => {
      if (this.labels.includes(reservation.destination))
      {
        const index = this.labels.indexOf(reservation.destination);
        this.nbPassagers[index] += reservation.nombrePassagers;
      }
    });
  }

  /* Ajout des valeurs */
  addValues(): void {
    for (let i = 0; i < this.labels.length; i++) {
      this.pieChartLabels.push(this.labels[i]);
      this.pieChartData[0].data.push(this.nbPassagers[i]);
    }
  }

  /* Réception des labels */
  getLabels(): void {
    this.reservation.map(reservation => {
      if (!this.labels.includes(reservation.destination)) {
        this.labels.push(reservation.destination);
      }
    });
  }
}





