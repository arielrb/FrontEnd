import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","");
  constructor (public personaService : PersonaService) { }

  ngOnInit(): void {
    //Subscribe responde ante los cambios del observable
    this.personaService.GetPersona().subscribe(data => (this.persona = data));
  }

}
