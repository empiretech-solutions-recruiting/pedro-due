import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
//porta a definir
  api = 'http://localhost:PORT/api/collaborator'

  constructor(
    private http: HttpClient
  ) { }

  create(collaborator: any): Observable<any> {
    return this.http.post<any>(this.api, collaborator)
  }

  read(): Observable<any>{
    return this.http.get<any>(this.api)
  }

  update(collaborator: any): Observable<any>{
    const url = `${this.api}/${collaborator.id}`
    return this.http.put<any>(url, collaborator)
  }

  delete(id: any): Observable<any>{
    const url = `${this.api}/${id}`
    return this.http.delete<any>(url)
  }

  checkId(id: string): Observable<any> {
    const url = `${this.api}/${id}`
    return this.http.get<any>(url)
  };

}
