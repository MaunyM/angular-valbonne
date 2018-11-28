import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Livre;
  @Output() titreClick: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  onTitreClicked(): void {
    this.titreClick.emit(this.livre.titre);
  }
}
