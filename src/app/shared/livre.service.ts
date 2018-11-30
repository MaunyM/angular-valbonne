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

  creer(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>('api/books', livre);
  }

  creerOuMettreAJour(livre: Livre): Observable<Livre> {
    return livre.id ? this.mettreAJour(livre) : this.creer(livre);
  }

  mettreAJour(livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`api/books/${livre.id}`, livre);
  }
}
