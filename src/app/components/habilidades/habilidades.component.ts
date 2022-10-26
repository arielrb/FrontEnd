import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidades[] = [];
  constructor(private servicio: HabilidadesService, private tokenService: TokenService) {}

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
        this.habilidad = data;
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
