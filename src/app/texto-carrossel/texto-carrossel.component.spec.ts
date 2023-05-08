import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoCarrosselComponent } from './texto-carrossel.component';

describe('TextoCarrosselComponent', () => {
  let component: TextoCarrosselComponent;
  let fixture: ComponentFixture<TextoCarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoCarrosselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
