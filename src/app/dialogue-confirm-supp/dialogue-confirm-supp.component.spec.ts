import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueConfirmSuppComponent } from './dialogue-confirm-supp.component';

describe('DialogueConfirmSuppComponent', () => {
  let component: DialogueConfirmSuppComponent;
  let fixture: ComponentFixture<DialogueConfirmSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueConfirmSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueConfirmSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
