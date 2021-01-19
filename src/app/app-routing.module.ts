import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscadorFelinoComponent } from './components/buscador-felino/buscador-felino.component';
import { FotosFelinasComponent } from './components/fotos-felinas/fotos-felinas.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: BuscadorFelinoComponent,
  },
  {
    path: 'photos',
    component: FotosFelinasComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
