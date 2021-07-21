import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfereciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencia = [];
  }

  // tslint:disable-next-line:typedef
  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }

}
