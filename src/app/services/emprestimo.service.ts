import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/configs/api.config';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { EmprestimoDTO } from '../models/emprestimo.dto';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(private http: HttpClient, private storage: StorageService) { }

  private getAuthHeader(): HttpHeaders {
    const token = this.storage.getLocalUser().token;
    const authHeader = new HttpHeaders({Authorization: 'Bearer ' + token});
    return authHeader;
  }

  store(numeroLivro: number): Observable<any> {
    const requestBody = {numeroLivro};

    return this.http.post(
      `${API_CONFIG.baseURL}/emprestimos`,
      requestBody,
      {headers: this.getAuthHeader()}
    );
  }

  updateBorrow(emprestimoId: number) {
    return this.http.put(
      `${API_CONFIG.baseURL}/emprestimos/${emprestimoId}`,
      {},
      {headers: this.getAuthHeader()}
    );
  }

  getAllBooksOfLoggedUser(): Observable<EmprestimoDTO[]> {
    return this.http.get<EmprestimoDTO[]>(
      `${API_CONFIG.baseURL}/emprestimos`,
      {headers: this.getAuthHeader()}
    );
  }
}
