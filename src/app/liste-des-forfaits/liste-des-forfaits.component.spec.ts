import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesForfaitsComponent } from './liste-des-forfaits.component';

describe('ListeDesForfaitsComponent', () => {
  let component: ListeDesForfaitsComponent;
  let fixture: ComponentFixture<ListeDesForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
