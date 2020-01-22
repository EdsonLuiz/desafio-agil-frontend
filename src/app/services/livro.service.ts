import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/configs/api.config";
import { LivroDTO } from "../models/livro.dto";
import { LivroFormDTO } from "../models/livro.form.dto";

@Injectable({
  providedIn: "root"
})
export class LivroService {
  constructor(private http: HttpClient) {}

  index(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(`${API_CONFIG.baseURL}/livros`);
  }

  store(livro: LivroFormDTO) {
    const requestBody = {
      ...livro
    };

    return this.http.post(`${API_CONFIG.baseURL}/livros`, requestBody);
  }

  listAllAvailableBooks(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(`${API_CONFIG.baseURL}/livros/disponivel`);
  }
}
