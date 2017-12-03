import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZenithEventTableComponent } from './zenith-event-table/zenith-event-table.component';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    ZenithEventTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
