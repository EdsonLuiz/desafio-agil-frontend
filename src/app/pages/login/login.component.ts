import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  usuario: UsuarioModel = {
    nomeCompleto: '',
    email: '',
    password: ''
  };
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {return; }


    this.subscription = this.loginService.login(this.usuario)
      .subscribe(resposta => {
        this.loginService.sucesso(resposta.headers.get('Authorization'));
      }, err => {
        console.log(err.error.error);
      });

    this.usuario.email = '';
    this.usuario.password = '';
  }

}
