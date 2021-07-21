import { Transferencia } from './../model/transferencia.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransfereciaService } from '../services/transferecia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransfereciaService, private router: Router) { }

  transferir(): void {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      error => console.log(error)
    );
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
