import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livre: Livre = {
    auteur : 'Hugo',
    titre : 'Quatre-vingt-treize',
    parution : 1874
  };

  constructor() {

  }

  ngOnInit() {
  }
}
