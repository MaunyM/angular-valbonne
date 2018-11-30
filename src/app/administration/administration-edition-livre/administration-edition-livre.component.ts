import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';
import { filter, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administration-edition-livre',
  templateUrl: './administration-edition-livre.component.html',
  styleUrls: ['./administration-edition-livre.component.css']
})
export class AdministrationEditionLivreComponent implements OnInit {
  livre: Livre = new Livre();

  constructor(private service: LivreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => +params.get('id')),
      filter(number => !isNaN(number)),
      switchMap(id => this.service.recuperer(id))
    ).subscribe(reponse => this.livre = reponse);
  }

  get modification(): boolean {
    return !!this.livre.id;
  }

  onSubmit() {
      this.service.creerOuMettreAJour(this.livre).subscribe();
  }

}
