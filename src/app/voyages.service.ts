import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Forfaits } from './forfaits';
import { Observable } from 'rxjs';
import {Reservation} from './reservation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
  reservationUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfaits[]> {
    return this.http.get<Forfaits[]>(this.voyagesUrl + 'da/1996400');
  }

  addForfaits(forfaits: Forfaits): Observable<Forfaits> {

    return this.http.post<Forfaits>(this.voyagesUrl, forfaits, httpOptions);
  }
  /** PUT: mise à jour du voyage */
  updateForfaits(forfaits: Forfaits): Observable<any> {
    const id = forfaits._id;
    return this.http.put<Forfaits>(this.voyagesUrl + id, forfaits, httpOptions);
  }
  /** DELETE: suppression du du voyage */
  deleteForfaits(id: number): Observable<Forfaits> {
    return this.http.delete<Forfaits>(this.voyagesUrl + id, httpOptions);
  }

}
