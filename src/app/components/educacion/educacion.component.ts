import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private servicio: EducacionService, private tokenService: TokenService) {}

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
        this.educacion = data;
      }
    )
  }
  Eliminar(id?:number):void{
    if(confirm("Seguro que querés eliminar esto?"))
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
