import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmprestimoDTO } from 'src/app/models/emprestimo.dto';
import { Subscription } from 'rxjs';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-devolver-livro',
  templateUrl: './devolver-livro.component.html',
  styleUrls: ['./devolver-livro.component.css']
})
export class DevolverLivroComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];
  emprestimos: EmprestimoDTO[] = [];

  constructor(private emprestimoService: EmprestimoService,
              private toastService: ToastService) { }

  ngOnInit() {
    this.getEmprestimos();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.map(sub => sub.unsubscribe());
    }
  }

  returnBorrowedBook(emprestimoId: number) {
    this.subscription.push(
      this.emprestimoService.updateBorrow(emprestimoId)
        .subscribe(response => {
          this.toastService.showToast('success', `Livro ${response.livro.titulo} devolvido.`);
          this.emprestimos = this.emprestimos.filter(emprestimo => emprestimo.id !== emprestimoId);
        }, err => {
          console.log(err);
        })
    );
  }

  getEmprestimos() {
    this.subscription.push(
      this.emprestimoService.getAllBooksOfLoggedUser()
        .subscribe(response => {
          this.emprestimos = response;
        }, err => {
          console.log(err);
        })
    );
  }

}
