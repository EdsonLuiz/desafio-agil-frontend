import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  novoUsuario(usuario: UsuarioModel) {
    const requestBody = {
      ...usuario
    };

    return this.http.post(
      this.url,
      requestBody
    );
  }
}
