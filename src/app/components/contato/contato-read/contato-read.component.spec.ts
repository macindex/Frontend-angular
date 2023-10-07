import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoReadComponent } from './contato-read.component';

describe('ContatoReadComponent', () => {
  let component: ContatoReadComponent;
  let fixture: ComponentFixture<ContatoReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoReadComponent]
    });
    fixture = TestBed.createComponent(ContatoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
