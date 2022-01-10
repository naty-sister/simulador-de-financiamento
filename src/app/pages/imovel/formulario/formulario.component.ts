import { ControlDataService } from './../../../shared/service/control-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  titulo: string = "Dados do imóvel";
  imoveisForm: any;
  imoveis: any;
  parcelas: string = "";
  valorTotal: string = "";
  validarNumeroParcelas: boolean = false;
  parc: string = '';
  taxaAoAno: number = 0.08;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
    separator: 2, prefix:"R$ "
  };



  constructor(
    private fb: FormBuilder,
    private controlDataService: ControlDataService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.controlDataService.imoveis.subscribe(imoveis => this.imoveis = imoveis);
    this.controlDataService.parcelas.subscribe(parcelas => this.parcelas = parcelas);
    this.controlDataService.valorTotal.subscribe(valorTotal => this.valorTotal = valorTotal)

    this.imoveisForm = this.fb.group({
      tipoImoveis: ['', Validators.required],
      renda: ['', Validators.required],
      imoveis: ['', Validators.required],
      valorEntrada: ['', [
          Validators.required
        ]
      ],
      parcelas: [null, Validators.required],
    });
  }
  valorEntradaSum(){
    let valorEntrada = this.imoveisForm.controls['valorEntrada'].value;
    console.log(valorEntrada);
  }

  validarNumero(){
    let NumeroParcelas = this.imoveisForm.controls['parcelas'].value;
    if(NumeroParcelas > 360){
      this.validarNumeroParcelas = true;
    }else {
      this.validarNumeroParcelas = false;
    }
  }

  private getValueEntrada(){
    let valorEntrada = this.imoveisForm.controls['valorEntrada'].value;
    return parseFloat(valorEntrada);
  }

  private getValueImovel(){
    let valorImovel = this.imoveisForm.controls['imoveis'].value;
    return parseFloat(valorImovel);
  }

  private totalAprovado(){
     let totalAprovado = this.getValueImovel() - this.getValueEntrada();
    return totalAprovado;
  }

  private rendaMinima(){
    const porcentagem = 0.3;
    const rendaMensal = this.imoveisForm.controls['renda'].value;
    const value = parseFloat(rendaMensal) * porcentagem;

    return value;
  }

  onSubmit() {
    this.getValueEntrada();
    this.getValueImovel();
    this.totalAprovado();
    this.rendaMinima();

    let parcelasNum: number = this.imoveisForm.controls['parcelas'].value;
    let parcelaInicial = (this.totalAprovado() * ((100 + (this.taxaAoAno * (parcelasNum / 12)))/100)) / parcelasNum;
    this.parcelas = parcelaInicial.toString();
    this.valorTotal = this.totalAprovado().toString()
    this.controlDataService.getInstallments(this.parcelas);
    this.controlDataService.getAmount(this.valorTotal)

    if ( this.getValueEntrada() < this.getValueImovel()*0.2 ){
      this._snackBar.open(
        "O valor da entrada deve ser maior que 20% do valor do imóvel", "OK",
      {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom",
      })
    } else if (this.getValueEntrada() > this.getValueImovel()) {
      this._snackBar.open("O valor da entrada deve ser menor que o valor do imóvel", "OK",
    {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom",
    })
    } else if (this.rendaMinima() > parcelaInicial) {
      this.router.navigateByUrl('status/aprovado')
    }else {
      this.router.navigateByUrl('status/reprovado')
    }
  }

}
