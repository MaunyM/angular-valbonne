import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { HeaderComponent } from './header/header.component';
import { ConsultationModule } from './consultation/consultation.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    HeaderComponent
  ],
  imports: [
    ConsultationModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
