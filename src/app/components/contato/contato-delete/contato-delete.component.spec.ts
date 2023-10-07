import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDeleteComponent } from './contato-delete.component';

describe('ContatoDeleteComponent', () => {
  let component: ContatoDeleteComponent;
  let fixture: ComponentFixture<ContatoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoDeleteComponent]
    });
    fixture = TestBed.createComponent(ContatoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
