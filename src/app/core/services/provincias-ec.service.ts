import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasEcService {
  private apiUrl = 'https://my-json-server.typicode.com/LeoDarkar/ApiProvinciasEcuador'; // URL del API

  constructor (private http:HttpClient) { }

  getProvinciasList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/provincias`);
  }
}
