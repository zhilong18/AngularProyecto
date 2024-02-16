import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormModule,
    RouterModule.forChild([{ path: '', component: FormularioComponent }]),
  ],
})
export class FormularioModule {}
