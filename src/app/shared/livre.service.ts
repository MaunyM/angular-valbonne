import { Injectable } from '@angular/core';
import { Livre } from './livre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  recuperer(): Livre {
    return {
      auteur : 'Hugo',
      titre : 'Quatre-vingt-treize',
      parution : 1874
    };
  }

  recupererTous(): Observable<Livre[]> {
    return this.http.get<Livre[]>('api/books');
  }
}
