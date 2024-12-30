import { Component, OnInit } from '@angular/core';
import { ProvinciasEcService } from '../../../core/services/provincias-ec.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export default class Section3Component implements OnInit {
  provincias: any[] = [];
  datos:FormGroup; 

  constructor(private provinciaService: ProvinciasEcService, // Inyecta el servicio de provincias 
              private httpClient: HttpClient
            ) {
              this.datos = new FormGroup({
                nombre: new FormControl('', Validators.required),
                apellido:  new FormControl(''),
                email:  new FormControl('', Validators.required),
                numeroTelefono:  new FormControl('', Validators.required),
                provincia:  new FormControl(''),
                ciudad:  new FormControl(''),
                direccion:  new FormControl('', Validators.required),
                asunto:  new FormControl('', Validators.required),
              });

  }
  ngOnInit(): void {
    try {
      this.provinciaService.getProvinciasList().subscribe(data => {
        this.provincias = data;
        console.log(this.provincias); // Verifica que los datos se están recibiendo
        console.log('Provincias:', this.provincias); // Verifica que los datos se están recibiendo
      });
    } catch (error) {console.error('Error al obtener las provincias', error); }

    }
  envioCorreo() {
    let params = {
      nombre: this.datos.value.nombre,
      apellido: this.datos.value.apellido,
      email: this.datos.value.email,
      numeroTelefono: this.datos.value.numeroTelefono,
      provincia: this.datos.value.provincia,
      ciudad: this.datos.value.ciudad,
      direccion: this.datos.value.direccion,
      asunto: this.datos.value.asunto,
    }
    console.log(params);
    this.httpClient.post('http://localhost:3000/envio', params).subscribe(res => {
    console.log(res);
   });
  }

}

