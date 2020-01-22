import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroDTO } from 'src/app/models/livro.dto';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar-disponivel',
  templateUrl: './listar-disponivel.component.html',
  styleUrls: ['./listar-disponivel.component.css']
})
export class ListarDisponivelComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  livros: LivroDTO[];


  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.subscription = this.livroService.listAllAvailableBooks()
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

  borrowBook(bookid: number) {
    console.log(bookid);
  }
}
