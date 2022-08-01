import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Persona } from '../model/Persona.model';
@Injectable({
  providedIn: 'root'
})
export class PersonaService 
{
  //Los metodos despues acceden al crud
  URL = "http://localhost:8080/personas/"
  constructor(private http: HttpClient) {}
    //EL observable para que es?
    public GetPersona(): Observable<Persona>
    {
      return this.http.get<Persona>(this.URL + 'traer/perfil');
    }
}
