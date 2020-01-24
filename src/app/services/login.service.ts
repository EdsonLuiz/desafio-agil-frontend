import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';
import { LocalUser } from '../models/localUser';
import { StorageService } from './storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static userIsLogged = new EventEmitter<string>();

  jwtHelper: JwtHelperService = new JwtHelperService();

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
    const [, token] = rawToken.split(' ');
    let user: LocalUser = {
      token,
      username: this.jwtHelper.decodeToken(token).sub
    };
    this.storage.setLocalUser(user);
    LoginService.userIsLogged.emit(user.username);
  }

  isAuthenticated(): boolean {
    const userFromLocalStorage = this.storage.getLocalUser();
    if (userFromLocalStorage === null) {
      return false;
    } else {
      const isNotExpired = !this.jwtHelper.isTokenExpired(userFromLocalStorage.token);
      const hasToken = userFromLocalStorage.token !== null;
      return hasToken && isNotExpired;
    }
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
