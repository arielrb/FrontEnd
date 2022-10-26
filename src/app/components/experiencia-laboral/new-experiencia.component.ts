import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/ExpLaboral';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { SExpLaboralService } from 'src/app/servicios/s-exp-laboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = "";
  descripcionExp: string = "";
  img: string = "";
  constructor(private sExp: SExpLaboralService, private activatedRoute: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onCreate(): void {
    const expe = new ExpLaboral(this.nombreExp, this.descripcionExp, this.img);
    this.sExp.save(expe).subscribe
      (
        data => {
          alert("Experiencia laboral añadida!");
          this.router.navigate([""]);
        }, err => {
        alert("Algo falló!");
        this.router.navigate([""]);
      }
      )
  }

}
