import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'http://localhost:8080/Habilidades'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + '/lista');
  }
  //Detalle! comillas simples inclinadas hacia la derecha (son para el path variable)
  public detail(id:number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `/detail/${id}`)
  }
  public save(objeto: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + `/crear`, objeto);
  }
  public update(id:number, objeto: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,objeto);
  } 
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/eliminar/${id}`);
  }
}
