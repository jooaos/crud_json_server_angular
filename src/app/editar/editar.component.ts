import { Transferencia } from './../model/transferencia.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfereciaService } from '../services/transferecia.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {

  valor: number;
  destino: string | number;
  id: number | string;
  todasTransferencias: Transferencia[];
  transferenciaSelecionadaParaEdicao: Transferencia;

  constructor(private activatedRoute: ActivatedRoute, private transferenciaService: TransfereciaService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.transferenciaService.todas().subscribe((transferencia: Transferencia[]) => {
      this.todasTransferencias = transferencia;
      this.procurarTransferencia();
    },
      error => console.log(error)
    );
  }

  private procurarTransferencia(): void {
    const transferencia = this.todasTransferencias.find((element: Transferencia) => element.id === this.id);
    this.transferenciaSelecionadaParaEdicao = transferencia;
    this.valor = transferencia.valor;
    this.destino = transferencia.destino;
  }

  editar(): void {
    const transferencia: Transferencia = {
      id: this.id,
      destino: this.destino,
      valor: this.valor,
      data: this.transferenciaSelecionadaParaEdicao.data
    };

    this.transferenciaService.update(transferencia).subscribe(() => {
      this.router.navigateByUrl('/extrato');
      setTimeout(() => {
        window.alert('Tranferência atualizada com sucesso');
      }, 300);
    },
      error => console.log(error)
    );
  }
}
