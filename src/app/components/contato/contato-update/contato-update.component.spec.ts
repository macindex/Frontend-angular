import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoUpdateComponent } from './contato-update.component';

describe('ContatoUpdateComponent', () => {
  let component: ContatoUpdateComponent;
  let fixture: ComponentFixture<ContatoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoUpdateComponent]
    });
    fixture = TestBed.createComponent(ContatoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
