import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscadorFelinoComponent } from './components/buscador-felino/buscador-felino.component';
import { HomeComponent } from './components/home/home.component';
import { FotosFelinasComponent } from './components/fotos-felinas/fotos-felinas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuscadorFelinoComponent,
    HomeComponent,
    FotosFelinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
