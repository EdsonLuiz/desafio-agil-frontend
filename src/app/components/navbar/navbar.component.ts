import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    const isAuth = this.loginService.isAuthenticated();
    return isAuth;
  }

  logout() {
    this.loginService.logout();
    Swal.fire({
      title: 'Logout!',
      text: 'Sua sessão foi encerrada. Muito obrigado',
      icon: 'info',
      confirmButtonText: 'Tela inicial'
    }).then(_ => this.router.navigateByUrl('/'));

  }
}
