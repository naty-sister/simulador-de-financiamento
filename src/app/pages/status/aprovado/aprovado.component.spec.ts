import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { AprovadoComponent } from './aprovado.component';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule
      ],
      declarations: [ AprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it("deve verificar variáveiso", () => {
    expect(component.titulo).toEqual("Aprovado");
    expect(component.subscription).toBeUndefined();
    expect(component.parcela).toEqual('');
    expect(component.valorTotal).toEqual('');
  });

  it("deve verificar se existe o mat-card ", () => {
    const fixture = TestBed.createComponent(AprovadoComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card"));
    expect(de.nativeElement).toBeDefined();
  });

  it("deve verificar se existe o mat-card-title ", () => {
    const fixture = TestBed.createComponent(AprovadoComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card-title"));
    expect(de.nativeElement).toBeDefined();
  });
  
});
