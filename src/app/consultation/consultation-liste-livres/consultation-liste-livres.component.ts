import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';

@Component({
  selector: 'app-consultation-liste-livres',
  templateUrl: './consultation-liste-livres.component.html',
  styleUrls: ['./consultation-liste-livres.component.css']
})
export class ConsultationListeLivresComponent implements OnInit {
  livres: Livre[];
  livreSelectionne: Livre;

  constructor(private service: LivreService) { }

  ngOnInit() {
    this.livres = this.service.recupererTous();
  }

  onClick(livreClique: Livre): void {
    this.livreSelectionne = livreClique;
  }
}
