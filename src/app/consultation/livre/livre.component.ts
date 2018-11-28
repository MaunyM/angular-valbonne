import { Component, OnInit, Input } from '@angular/core';
import { Livre } from 'src/app/shared/livre';
import { LivreService } from 'src/app/shared/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Livre;

  ngOnInit() {
  }
}
