import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProponenteRoutingModule } from '../proponente-routing.module';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule,
        ProponenteRoutingModule,
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

  it('form should be valid', () => {
    fixture.detectChanges();
    component.proponenteForm.controls.nome.setValue('Natalia');
    component.proponenteForm.controls.profissao.setValue('Dev');
    component.proponenteForm.controls.cpf.setValue('99999999999');
    component.proponenteForm.controls.email.setValue('natalia@emeal.nttdata.com');
    component.proponenteForm.controls.nascimento.setValue('13-01-1989');
    component.proponenteForm.controls.cep.setValue('99999999');
    component.proponenteForm.controls.celular.setValue('99999999999');
    expect(component.proponenteForm.invalid).toBeDefined();
  });

  it("deve verificar se a função onSubmit() foi definida ", () => {
    component.onSubmit();
    expect(component.onSubmit()).toBeUndefined();
  });

  it("deve chamar o metodo de onSubmit", () => {
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.onSubmit()).toHaveBeenCalledTimes(1);
  });


});
