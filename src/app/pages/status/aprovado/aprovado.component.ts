import { ControlDataService } from './../../../shared/service/control-data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.scss']
})
export class AprovadoComponent implements OnInit {

  titulo = "Aprovado";
  subscription!: Subscription
  parcela!: string;
  valorTotal!: string;

  constructor(private controlDataService: ControlDataService ) {

    this.controlDataService.parcelas.subscribe(parcela => this.parcela = parcela)
    this.controlDataService.valorTotal.subscribe(valorTotal => this.valorTotal = valorTotal)

   }

  ngOnInit() {
  }


}
