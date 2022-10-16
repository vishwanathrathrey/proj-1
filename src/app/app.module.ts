import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { IOTComponent } from './iot/iot.component';
import { INNOVATVEComponent } from './innovatve/innovatve.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CuctompipePipe } from './cuctompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    IOTComponent,
    INNOVATVEComponent,
    DemopipesComponent,
    CuctompipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
