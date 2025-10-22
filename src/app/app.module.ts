import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CombinacionesComponent } from './combinaciones/combinaciones.component';
import { PermutacionesComponent } from './permutaciones/permutaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinacionesComponent,
    PermutacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
