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
  URL = "http://localhost:8080/MiPersona"
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + '/lista');
  }
  //Detalle! comillas simples inclinadas hacia la derecha (son para el path variable)
  public detail(id:number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `/detail/${id}`)
  }
  //Solo update porque no quiero crear mas personas
  public update(id:number, objeto: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,objeto);
  } 
}
