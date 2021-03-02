import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiquesPieComponent } from './graphiques-pie.component';

describe('GraphiquesPieComponent', () => {
  let component: GraphiquesPieComponent;
  let fixture: ComponentFixture<GraphiquesPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiquesPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiquesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
