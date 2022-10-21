import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = "";
  descripcion:string = "";
  img:string = "";
  constructor(private servicio: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const pro = new Proyectos(this.nombre,this.descripcion, this.img);
    this.servicio.save(pro).subscribe
    (
      data =>
      {
      alert("Proyecto añadido!");
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
