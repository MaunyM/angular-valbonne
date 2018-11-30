import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRootComponent } from './administration-root/administration-root.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationHeaderComponent } from './administration-header/administration-header.component';
import { AdministrationEditionLivreComponent } from './administration-edition-livre/administration-edition-livre.component';

const routes: Routes = [
  { path : '', component : AdministrationRootComponent}
];

@NgModule({
  declarations: [AdministrationRootComponent, AdministrationHeaderComponent, AdministrationEditionLivreComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdministrationModule { }
