import { ImovelRoutingModule } from './../imovel-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormularioComponent } from './formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        ImovelRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [ FormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Validar se o formulário está inválido ou vazio", () => {
    component.imoveisForm.controls.tipoImoveis.setValue("");
    component.imoveisForm.controls.renda.setValue("");
    component.imoveisForm.controls.imoveis.setValue("");
    component.imoveisForm.controls.valorEntrada.setValue("");
    component.imoveisForm.controls.parcelas.setValue("");
    expect(component.imoveisForm.valid).toBeFalsy();
  });

  it("deve verificar o ngOnInit", () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it("Validar campo tipoImoveis", () => {
    const tipoImoveis = component.imoveisForm.controls.tipoImoveis;
    expect(tipoImoveis.valid).toBeFalsy();
    tipoImoveis.setValue("");
    expect(tipoImoveis.hasError("required")).toBeTruthy();
  });

  it("Validar campo renda", () => {
    const renda = component.imoveisForm.controls.renda;
    expect(renda.valid).toBeFalsy();
    renda.setValue("");
    expect(renda.hasError("required")).toBeTruthy();
  });

  it("Validar campo imoveis", () => {
    const imoveis = component.imoveisForm.controls.imoveis;
    expect(imoveis.valid).toBeFalsy();
    imoveis.setValue("");
    expect(imoveis.hasError("required")).toBeTruthy();
  });

  it("Validar campo valorEntrada", () => {
    const valorEntrada = component.imoveisForm.controls.valorEntrada;
    expect(valorEntrada.valid).toBeFalsy();
    valorEntrada.setValue("");
    expect(valorEntrada.hasError("required")).toBeTruthy();
  });

  it("Validar campo valorEntrada", () => {
    const parcelas = component.imoveisForm.controls.parcelas;
    expect(parcelas.valid).toBeFalsy();
    parcelas.setValue("");
    expect(parcelas.hasError("required")).toBeTruthy();
  });

  it("deve chamar o metodo de onSubmit", () => {
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.onSubmit()).toHaveBeenCalledTimes(1);
  });
});
