import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/ExpLaboral';
import { SExpLaboralService } from 'src/app/servicios/s-exp-laboral.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = "";
  descripcionExp:string = "";
  img:string = "";
  constructor(private sExp: SExpLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new ExpLaboral(this.nombreExp,this.descripcionExp, this.img);
    this.sExp.save(expe).subscribe
    (
      data =>
      {
      alert("Experiencia laboral añadida!");
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
