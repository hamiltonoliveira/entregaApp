import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

import { Subject } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.component.html',
  styleUrls: ['./entregador.component.scss']
})
export class EntregadorComponent {
  errorMessage: string = '';
  panelOpenState = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  triggerObservable: Subject<void> = new Subject<void>();
  capturedImage: string | undefined;

  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    celular: new FormControl(''),
    password: new FormControl(''),
    confirmaPassword: new FormControl(''),
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    estado: new FormControl(''),
    municipio: new FormControl(''),
  });

  submitted = false;
  constructor(private formBuilder: FormBuilder,) {
  }

  ngOnInit() : void {
    this.form = this.formBuilder.group(
       {
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required],
        celular: ['', Validators.required],
        password: ['', Validators.required],
        confirmaPassword:['', Validators.required],
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['', Validators.required],
        estado: ['', Validators.required],
        municipio: ['', Validators.required],
      })}


  capture(): void {
    this.triggerObservable.next();
  }

  handleImageCapture(image: WebcamImage): void {
    const imageBase64: string = image.imageAsBase64;
    this.capturedImage = imageBase64;
    console.log("IMAGE ",this.capturedImage);
  }

  onSubmit():void{
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
   console.log("AQUI")
  }

}
