import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://ariel-restagno-barros.onrender.com/Educacion'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + '/lista');
  }
  //Detalle! comillas simples inclinadas hacia la derecha (son para el path variable)
  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `/detail/${id}`)
  }
  public save(objeto: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + `/crear`, objeto);
  }
  public update(id:number, objeto: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,objeto);
  } 
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/eliminar/${id}`);
  }
}
