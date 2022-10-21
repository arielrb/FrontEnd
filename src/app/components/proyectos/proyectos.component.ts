import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyectos[] = [];
  constructor(private servicio: ProyectosService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargar();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }
  cargar():void{
    this.servicio.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }
  Eliminar(id?:number):void{
    if(id != undefined){
      this.servicio.delete(id).subscribe(
        data => {
          this.cargar();

        }, err => {
          alert("No se pudo borrar!")
        }
      )
    }
  }

}
