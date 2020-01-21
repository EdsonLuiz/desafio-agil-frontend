import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LivroComponent } from './pages/livro/livro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { DoarComponent } from './pages/livro/doar/doar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LivroComponent,
    NavbarComponent,
    LoginComponent,
    DoarComponent
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
