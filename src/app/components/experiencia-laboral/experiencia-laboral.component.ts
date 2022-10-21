import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/model/ExpLaboral';
import { SExpLaboralService } from 'src/app/servicios/s-exp-laboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  expLab: ExpLaboral[] = [];
  constructor(private sExp: SExpLaboralService, private tokenService: TokenService) {}

  isLogged = false;
 
  ngOnInit(): void {
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }
  cargarExp():void{
    this.sExp.lista().subscribe(
      data => {
        this.expLab = data;
      }
    )
  }
  Eliminar(id?:number):void{
    if(id != undefined){
      this.sExp.delete(id).subscribe(
        data => {
          this.cargarExp();

        }, err => {
          alert("No se pudo borrar la experiencia laboral!")
        }
      )
    }
  }

}