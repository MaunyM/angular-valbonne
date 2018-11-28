import { Injectable } from '@angular/core';
import { Livre } from './livre';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor() { }

  recuperer(): Livre {
    return {
      auteur : 'Hugo',
      titre : 'Quatre-vingt-treize',
      parution : 1874
    };
  }
}
