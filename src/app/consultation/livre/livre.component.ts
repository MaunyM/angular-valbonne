import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Livre;
  @Output() titreClick: EventEmitter<number> = new EventEmitter();

  constructor(private route: ActivatedRoute, private livreService: LivreService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => +params.get('id')),
      filter(number => !isNaN(number)),
      switchMap(id => this.livreService.recuperer(id))
    ).subscribe(reponse => this.livre = reponse);
  }

  onTitreClicked(): void {
    this.titreClick.emit(this.livre.id);
  }
}
