import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'formulario',
    loadChildren: () => import('./page/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./page/informacion/informacion.module').then(m => m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
