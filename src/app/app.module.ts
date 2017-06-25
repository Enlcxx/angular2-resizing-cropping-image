import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  AlyleUIModule,
  LyResizingCroppingImageModule,
  LyButtonModule,
  LyIconButtonModule
 } from 'alyle-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AlyleUIModule.forRoot({
      primary: 'blue',
      accent: 'pink',
      other: 'red',
    }),
    LyResizingCroppingImageModule,
    LyButtonModule,
    LyIconButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
