import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  datosContactoForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.datosContactoForm = this.fb.group({
      nombre: new FormControl(null, []),
      apellido: new FormControl(null, []),
      documentacion: new FormControl(null, []),
      email: new FormControl(null, []),
      telefono: new FormControl(null, []),
      contraseña: new FormControl(null, []),
      idioma: new FormControl(null, []),
      fechaNacimiento: new FormControl(null, []),
      nacionalidad: new FormControl(null, []),
      age: new FormControl(null, []),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.datosContactoForm.value);
  }
  onReset() {
    this.datosContactoForm.reset();
  }
}
