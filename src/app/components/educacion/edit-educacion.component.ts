import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;
  constructor(private servicio : EducacionService, private activatedRoute: ActivatedRoute, private router: Router,
    private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err =>{
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.update(id,this.educacion).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar!");
        this.router.navigate([''])
      }
    )
  }

  uploadImage($event: any) 
  {

  }
}
