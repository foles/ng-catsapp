import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscadorFelinoComponent } from './components/buscador-felino/buscador-felino.component';
import { FotosFelinasComponent } from './components/fotos-felinas/fotos-felinas.component';

const routes: Routes = [
  {
    path: '',
    component: BuscadorFelinoComponent,
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
    component: BuscadorFelinoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
