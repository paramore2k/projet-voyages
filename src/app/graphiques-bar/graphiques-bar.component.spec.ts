import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiquesBarComponent } from './graphiques-bar.component';

describe('GraphiquesBarComponent', () => {
  let component: GraphiquesBarComponent;
  let fixture: ComponentFixture<GraphiquesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiquesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiquesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
