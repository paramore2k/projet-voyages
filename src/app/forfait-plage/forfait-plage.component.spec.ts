import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitPlageComponent } from './forfait-plage.component';

describe('ForfaitPlageComponent', () => {
  let component: ForfaitPlageComponent;
  let fixture: ComponentFixture<ForfaitPlageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitPlageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitPlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
