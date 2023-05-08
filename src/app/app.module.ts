import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FaixaComponent } from './faixa/faixa.component';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { TextoCarrosselComponent } from './texto-carrossel/texto-carrossel.component';
import { ColunaComponent } from './coluna/coluna.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FaixaComponent,
    FooterComponent,
    CardComponent,
    CarrosselComponent,
    TextoCarrosselComponent,
    ColunaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
