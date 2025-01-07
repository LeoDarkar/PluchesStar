import { Component, OnInit } from '@angular/core';
import { ProvinciasEcService } from '../../../core/services/provincias-ec.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorreoService } from '../../../core/services/correo.service';
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

  constructor(
    private provinciaService: ProvinciasEcService, // Inyecta el servicio de provincias
    private correoService: CorreoService // Inyecta el servicio de correo
  ) {
    this.datos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      numeroTelefono: new FormControl('', Validators.required),
      provincia: new FormControl(''),
      ciudad: new FormControl(''),
      direccion: new FormControl('', Validators.required),
      asunto: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    try {
      this.provinciaService.getProvinciasList().subscribe(data => {
        this.provincias = data;
        console.log('Provincias:', this.provincias); // Verifica que los datos se están recibiendo
      });
    } catch (error) {console.error('Error al obtener las provincias', error); }

    }
  
    limpiarFormulario() {
    this.datos.reset();
  }

  envioCorreo() {
    if (this.datos.valid) {
      let params = {
        nombre: this.datos.value.nombre,
        apellido: this.datos.value.apellido,
        email: this.datos.value.email,
        numeroTelefono: this.datos.value.numeroTelefono,
        provincia: this.datos.value.provincia,
        ciudad: this.datos.value.ciudad,
        direccion: this.datos.value.direccion,
        asunto: this.datos.value.asunto,
      };
      console.log(params);
      this.correoService.enviarCorreo(params).subscribe(
        res => {
          console.log(res);
          this.limpiarFormulario(); // Limpia el formulario después de enviar el correo
          alert('El correo ha sido enviado exitosamente.');
        },
        error => {
          console.error('Error al enviar el correo', error);
          alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
        }
      );
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
  

}

