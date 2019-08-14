import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PastilleModule } from 'pastille';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PastilleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
