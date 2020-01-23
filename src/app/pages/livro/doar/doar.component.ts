import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LivroFormDTO } from 'src/app/models/livro.form.dto';
import { LivroService } from 'src/app/services/livro.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css']
})
export class DoarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  livroFomrDTO: LivroFormDTO;



  constructor(private livroService: LivroService,
              private toastService: ToastService,
              private router: Router) {
    this.livroFomrDTO = {
      titulo: '',
      autor: '',
      anoPublicado: 0
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {return; }

    this.subscription = this.livroService.store(this.livroFomrDTO)
      .subscribe(resposta => {
        this.toastService.showToast('success', 'Recebemos sua doação');
        this.router.navigateByUrl('/');
      },  err => {
        this.toastService.showToast('error', 'Ocorreu um problema com sua doação');
        console.log(err.error.error);
      });
  }
}
