import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';
import { LocalUser } from '../models/localUser';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private storage: StorageService) { }

  login(usuario: UsuarioModel) {
    const requestBody = {
      username: usuario.email,
      password: usuario.password
    };

    return this.http.post(
      this.url,
      requestBody,
      {observe: 'response', responseType: 'text'}
    );
  }

  sucesso(rawToken: string) {
    let [, token] = rawToken.split(' ');
    let user: LocalUser = {
      token
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
