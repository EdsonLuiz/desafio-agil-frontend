import { Component, OnInit, OnDestroy } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Subscription } from 'rxjs';
import { LivroDTO } from 'src/app/models/livro.dto';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  livros: LivroDTO[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.subscription = this.livroService.index()
      .subscribe(response => {
        this.livros = response;
      }, err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
