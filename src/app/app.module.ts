import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { HeaderComponent } from './header/header.component';
import { ConsultationModule } from './consultation/consultation.module';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
 {
   path: 'administration',
   loadChildren: './administration/administration.module#AdministrationModule'
},
{
  path: '',
  redirectTo: 'consultation',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ConsultationModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
