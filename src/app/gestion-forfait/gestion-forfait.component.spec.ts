import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionForfaitComponent } from './gestion-forfait.component';

describe('GestionForfaitComponent', () => {
  let component: GestionForfaitComponent;
  let fixture: ComponentFixture<GestionForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
