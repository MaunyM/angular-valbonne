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

  recupererTous(): Livre[] {
    return [{
      auteur : 'Hugo',
      titre : 'Quatre-vingt-treize',
      parution : 1874
    },
    {
      auteur : 'Hugo',
      titre : 'Quatre-vingt-quatorze',
      parution : 1876
    },
    {
      titre : 'Quatre-vingt-Quinze',
      parution : 1878
    }
  ];
  }
}
