import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombre: string = "";
  porcentaje:number;
  img:string = "";
  constructor(private servicio: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const hab = new Habilidades(this.nombre,this.porcentaje, this.img);
    this.servicio.save(hab).subscribe
    (
      data =>
      {
      alert("Habilidad añadida!");
      this.router.navigate([""]);
     },err => 
     {
      alert("Algo falló!");
      this.router.navigate([""]);
     }
    )
  }
  uploadImage($event: any) 
  {

  }
}
