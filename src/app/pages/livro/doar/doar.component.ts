import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LivroFormDTO } from 'src/app/models/livro.form.dto';
import { LivroService } from 'src/app/services/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css']
})
export class DoarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  livroFomrDTO: LivroFormDTO;

  constructor(private livroService: LivroService, private router: Router) {
    this.livroFomrDTO = {
      titulo: '',
      autor: '',
      anoPublicado: 0
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {return; }

    this.subscription = this.livroService.store(this.livroFomrDTO)
      .subscribe(resposta => {
        this.router.navigateByUrl('/');
      },  err => {
        console.log(err.error.error);
      });
  }
}
