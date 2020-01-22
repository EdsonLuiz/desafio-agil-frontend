import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroDTO } from 'src/app/models/livro.dto';
import { LivroService } from 'src/app/services/livro.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-disponivel',
  templateUrl: './listar-disponivel.component.html',
  styleUrls: ['./listar-disponivel.component.css']
})
export class ListarDisponivelComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];
  livros: LivroDTO[] = [];


  constructor(private livroService: LivroService,
              private emprestimoService: EmprestimoService,
              private router: Router) { }

  ngOnInit() {
    this.subscription.push(
      this.livroService.listAllAvailableBooks()
        .subscribe(response => {
          this.livros = response;
        }, err => {
          console.log(err);
        })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.map(sub => sub.unsubscribe());
    }
  }

  borrowBook(bookid: number) {
    console.log(bookid);
    this.subscription.push(
      this.emprestimoService.store(bookid)
        .subscribe(response => {
          this.livros = this.livros.filter(l => l.numero !== bookid);
        }, err => {
          console.log(err.error.error);
        })
    );
    this.router.navigateByUrl('/emprestimo');
  }
}
