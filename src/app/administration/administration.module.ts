import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRootComponent } from './administration-root/administration-root.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationHeaderComponent } from './administration-header/administration-header.component';
import { AdministrationEditionLivreComponent } from './administration-edition-livre/administration-edition-livre.component';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
  { path : 'editer/:id', component : AdministrationRootComponent},
  { path : '', component : AdministrationRootComponent}
];

@NgModule({
  declarations: [
    AdministrationRootComponent,
    AdministrationHeaderComponent,
    AdministrationEditionLivreComponent],
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdministrationModule { }
