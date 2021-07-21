import { Transferencia } from './../model/transferencia.model';
import { TransfereciaService } from './../services/transferecia.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransfereciaService) { }

  ngOnInit(): void {
    this.carregarTransferencias();
  }

  private carregarTransferencias(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

  deletarTransferencia(id: string | number): void {
    this.service.deletar(id).subscribe((data) => {
      this.carregarTransferencias();
    },
      error => console.log(error)
    );
  }

}
