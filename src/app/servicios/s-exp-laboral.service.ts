import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../model/ExpLaboral';

@Injectable({
  providedIn: 'root'
})
export class SExpLaboralService {
  expURL = 'http://localhost:8080/ExperienciaLaboral'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<ExpLaboral[]>{
    return this.httpClient.get<ExpLaboral[]>(this.expURL + '/lista');
  }

  //Detalle! comillas simples inclinadas hacia la derecha (son para el path variable)
  public detail(id:number): Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.expURL + `/detail/${id}`)
  }

  public save(exp: ExpLaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `/crear`, exp);
  }
  public update(id:number, exp: ExpLaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/update/${id}`,exp);
  } 
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/eliminar/${id}`);
  }
}
