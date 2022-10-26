import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyectos = null;
  constructor(private servicio : ProyectosService, private activatedRoute: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.update(id,this.proyecto).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }
}
