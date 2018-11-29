import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
