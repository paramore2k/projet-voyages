import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitUrbainComponent } from './forfait-urbain.component';

describe('ForfaitUrbainComponent', () => {
  let component: ForfaitUrbainComponent;
  let fixture: ComponentFixture<ForfaitUrbainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitUrbainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitUrbainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
