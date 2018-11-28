import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationRootComponent } from './consultation-root/consultation-root.component';
import { ConsultationHeaderComponent } from './consultation-header/consultation-header.component';
import { LivreComponent } from './livre/livre.component';

@NgModule({
  declarations: [
    ConsultationRootComponent,
    ConsultationHeaderComponent,
    LivreComponent
  ],
  exports: [
    ConsultationRootComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultationModule { }
