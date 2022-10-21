import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = "";
  descripcion:string = "";
  img:string = "";
  constructor(private servicio: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const edu = new Educacion(this.nombre,this.descripcion, this.img);
    this.servicio.save(edu).subscribe
    (
      data =>
      {
      alert("Educación añadida!");
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
