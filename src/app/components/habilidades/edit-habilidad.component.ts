import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  habilidad: Habilidades = null;
  constructor(private servicio : HabilidadesService, private activatedRoute: ActivatedRoute, private router: Router, private tokenService : TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err =>{
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.update(id,this.habilidad).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }

  uploadImage($event: any) 
  {

  }
}
