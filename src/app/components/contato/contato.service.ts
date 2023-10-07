import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Contato } from './contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = "http://localhost:3001/contatos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato)
  }
  read(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl)
  }
  readById(id: number): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Contato>(url)
  }
  update(product: Contato): Observable<Contato> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Contato>(url, product)
  }
  delete(id: number): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Contato>(url)
  }
}
