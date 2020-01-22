import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarDisponivelComponent } from './pages/emprestimo/listar-disponivel/listar-disponivel.component';
import { DoarComponent } from './pages/livro/doar/doar.component';
import { LivroComponent } from './pages/livro/livro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LivroComponent,
    NavbarComponent,
    LoginComponent,
    DoarComponent,
    ListarDisponivelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
