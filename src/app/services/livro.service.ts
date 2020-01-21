import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/configs/api.config';
import { Observable } from 'rxjs';
import { LivroDTO } from '../models/livro.dto';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  index(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(`${API_CONFIG.baseURL}/livros`);
  }
}
