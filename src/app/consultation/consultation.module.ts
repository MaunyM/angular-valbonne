import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationRootComponent } from './consultation-root/consultation-root.component';
import { ConsultationHeaderComponent } from './consultation-header/consultation-header.component';
import { LivreComponent } from './livre/livre.component';
import { ConsultationListeLivresComponent } from './consultation-liste-livres/consultation-liste-livres.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'consultation', component: ConsultationRootComponent ,
    children : [
        { path : 'livre/:id', component: LivreComponent},
        { path: '', component: ConsultationListeLivresComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ConsultationRootComponent,
    ConsultationHeaderComponent,
    LivreComponent,
    ConsultationListeLivresComponent
  ],
  exports: [
    ConsultationRootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConsultationModule { }
