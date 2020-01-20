import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {return; }

    this.usuarioService.novoUsuario(this.usuario)
      .subscribe(resposta => {
        console.log(resposta);
      }, err => {
        console.log(err.error.error);
      });
  }

}
