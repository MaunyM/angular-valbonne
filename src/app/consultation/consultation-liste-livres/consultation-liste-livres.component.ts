import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consultation-liste-livres',
  templateUrl: './consultation-liste-livres.component.html',
  styleUrls: ['./consultation-liste-livres.component.css']
})
export class ConsultationListeLivresComponent implements OnInit {
  livres: Livre[];
  livreSelectionne: Livre;
  private subscription: Subscription;

  constructor(private service: LivreService) { }

  ngOnInit() {
    this.service.recupererTous().subscribe(reponse => this.livres = reponse);
  }

  onClick(event: number): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.service.recuperer(event).subscribe(reponse => this.livreSelectionne = reponse);
  }
}
