import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: InformacionComponent
    }])
  ]
})
export class InformacionModule { }
