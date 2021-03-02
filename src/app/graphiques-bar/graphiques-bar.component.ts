import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservation.service';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {Reservation} from '../reservation';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphiques-bar',
  templateUrl: './graphiques-bar.component.html',
  styleUrls: ['./graphiques-bar.component.css']
})
export class GraphiquesBarComponent implements OnInit {

  constructor(private reservationService: ReservationService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  labels: Array<string> = [];
  ventes: Array<number> = [];
  reservation: Array<Reservation>;
  nbPassagers: Array<number> = [];
  destination: Array<string> = [];
  /* Graphique en forme de bar  */

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [
    { data: [ ], label: 'Ventes par Destinations',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'},
  ];
  public barChartType: ChartType = 'bar';
  public barChartColors: [

  ];
  public barChartLegend = true;

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
    this.ventes = new Array(this.labels.length).fill(0);
    this.reservation.map(reservation => {
      if (this.labels.includes(reservation.destination))
      {
       const index = this.labels.indexOf(reservation.destination);
       this.nbPassagers[index] += reservation.nombrePassagers;
       this.ventes[index] += reservation.prixTotal;
      }
    });
  }

  /* Ajout des valeurs */
addValues(): void {
    for (let i = 0; i < this.labels.length; i++){
      this.barChartLabels.push(this.labels[i]);
      this.barChartData[0].data.push(this.ventes[i]);
      // this.barChartData.push(this.data[i]);
    }
  }
  /* Appliquer une couleur d'arrière-plan aléatoire */
  couleurAleatoire(): any{
    let maCouleur = '#';
    const lettres = '012345ABDEFG';
    for (let i = 0; i < 6; i++){
      maCouleur += lettres[Math.floor(Math.random() * 16)];
    }
    return maCouleur;
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
