import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Forfaits } from './forfaits';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfaits[]> {
    return this.http.get<Forfaits[]>(this.voyagesUrl + 'da/1996489');
  }

  addForfaits(forfaits: Forfaits): Observable<Forfaits> {
    const id = forfaits._id;
    return this.http.post<Forfaits>(this.voyagesUrl + 'da/1996489/' + id, forfaits, httpOptions);
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
