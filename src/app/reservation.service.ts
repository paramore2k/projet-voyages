import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from './reservation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  reservationUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }
  getReservations(): Observable<any[]> {
    return this.http.get<Reservation[]>(this.reservationUrl);
  }
}
