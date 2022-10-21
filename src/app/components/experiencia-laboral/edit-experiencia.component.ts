import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/ExpLaboral';
import { SExpLaboralService } from 'src/app/servicios/s-exp-laboral.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: ExpLaboral = null;
  constructor(private sExp : SExpLaboralService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err =>{
        alert("Error al modificar la experiencia laboral!");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.update(id,this.expLab).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar la experiencia laboral!");
        this.router.navigate([''])
      }
    )
  }

  uploadImage($event: any) 
  {

  }
}
