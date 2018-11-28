import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livre: Livre;

  constructor(private patate: LivreService) {}

  ngOnInit() {
    this.livre = this.patate.recuperer();
  }
}
