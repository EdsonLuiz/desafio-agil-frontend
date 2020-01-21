import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  usuario: UsuarioModel;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {return; }

    this.subscription = this.usuarioService.novoUsuario(this.usuario)
      .subscribe(resposta => {
        console.log(resposta);
      }, err => {
        console.log(err.error.error);
      });
  }

}
