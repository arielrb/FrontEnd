import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'http://localhost:8080/Proyectos'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + '/lista');
  }
  //Detalle! comillas simples inclinadas hacia la derecha (son para el path variable)
  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `/detail/${id}`)
  }
  public save(objeto: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + `/crear`, objeto);
  }
  public update(id:number, objeto: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,objeto);
  } 
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/eliminar/${id}`);
  }
}
