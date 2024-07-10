import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDtoInterface, CalculatePercentageInterface } from './app.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BillsService {
  constructor(private http: HttpClient) { }


  public CalculatePercentage(value: number): Observable<CalculatePercentageInterface> {
    return this.http.get<CalculatePercentageInterface>(`https://api.gamidas.dev.br/contas/conta?valor=${value}`)
  }

  public UpdateSalary(dto: ApiDtoInterface): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`https://api.gamidas.dev.br/contas/atualizar-salario`, JSON.stringify(dto), { headers })
  }
}
