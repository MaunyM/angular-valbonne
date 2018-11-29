import { Injectable } from '@angular/core';
import { Livre } from './livre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  recuperer(id: number): Observable<Livre> {
    return this.http.get<Livre>(`/api/books/${id}`);
  }

  recupererTous(): Observable<Livre[]> {
    return this.http.get<Livre[]>('api/books');
  }
}
