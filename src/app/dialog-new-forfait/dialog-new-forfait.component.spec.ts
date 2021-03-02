import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewForfaitComponent } from './dialog-new-forfait.component';

describe('DialogNewForfaitComponent', () => {
  let component: DialogNewForfaitComponent;
  let fixture: ComponentFixture<DialogNewForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
