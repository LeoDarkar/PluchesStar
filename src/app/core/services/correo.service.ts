import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private apiUrl = 'https://backend-peluchesstar.onrender.com';

  constructor(private http: HttpClient) { }

  enviarCorreo(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, datos);
  }
}
