import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isAuthenticated()) {
        return true;
      }
      Swal.fire({
        title: 'Não autorizado!',
        text: 'Você não tem permissão para acessar esta página!',
        icon: 'error',
        confirmButtonText: 'Fazer login'
      }).then(_ => this.router.navigateByUrl('login'));
      return false;
  }

}
