import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona: Persona = null;
  constructor(private servicio: PersonaService, private activatedRoute: ActivatedRoute, private router: Router, public servicioImagen: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al editar el perfil!");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.servicioImagen.url;
    this.servicio.update(id, this.persona).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar la experiencia laboral!");
        this.router.navigate([''])
      }
    )
  }

  uploadImage($event: any) 
  {
    const ID = this.activatedRoute.snapshot.params['id']
    const FILENAME = "Foto_Perfil_ID_" + ID;
    this.servicioImagen.uploadImage($event,FILENAME);

  }

}
