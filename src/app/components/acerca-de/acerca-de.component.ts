import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = null;
  constructor(private Sperso: PersonaService, private tokenService: TokenService) {}

  isLogged = false;
 
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }
      //Subscribe responde ante los cambios del observable, y es 1 porque es mi usuario
  cargarPersona():void{
    this.Sperso.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }
}
