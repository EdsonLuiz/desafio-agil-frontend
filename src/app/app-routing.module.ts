import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LivroComponent } from './pages/livro/livro.component';
import { LoginComponent } from './pages/login/login.component';
import { DoarComponent } from './pages/livro/doar/doar.component';
import { ListarDisponivelComponent } from './pages/emprestimo/listar-disponivel/listar-disponivel.component';
import { DevolverLivroComponent } from './pages/emprestimo/devolver-livro/devolver-livro.component';


const routes: Routes = [
  {path: '', component: LivroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'livro/doar', component: DoarComponent},
  {path: 'emprestimo', component: ListarDisponivelComponent},
  {path: 'emprestimo/devolver', component: DevolverLivroComponent},
  {path: '**', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
