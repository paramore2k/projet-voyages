import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixForfaitComponent } from './prix-forfait.component';

describe('PrixForfaitComponent', () => {
  let component: PrixForfaitComponent;
  let fixture: ComponentFixture<PrixForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
