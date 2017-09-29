import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetalheComponent } from './pessoa-detalhe.component';

describe('PessoaDetalheComponent', () => {
  let component: PessoaDetalheComponent;
  let fixture: ComponentFixture<PessoaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
