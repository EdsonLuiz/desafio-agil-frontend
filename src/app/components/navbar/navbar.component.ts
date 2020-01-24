import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth: boolean;
  userName: string;

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    console.count('init');
    LoginService.userIsLogged.subscribe(
      email => {this.isAuthenticated(); }
    );
    this.isAuthenticated();
  }

  isAuthenticated(): boolean {
    // this.isAuth = this.loginService.isAuthenticated();
    console.count('isAuth');
    this.isAuth = this.loginService.isAuthenticated();
    if (this.isAuth) {
      this.userName = this.storageService.getLocalUser().username;
    } else {
      this.userName = '';
    }
    return this.isAuth;
  }

  login() {
    this.isAuthenticated();
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.loginService.logout();
    this.isAuthenticated();
    Swal.fire({
      title: 'Logout!',
      text: 'Sua sessão foi encerrada. Muito obrigado',
      icon: 'info',
      confirmButtonText: 'Tela inicial'
    }).then(_ => this.router.navigateByUrl('/'));

  }
}
