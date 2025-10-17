import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBar } from './step-bar';

describe('StepBar', () => {
  let component: StepBar;
  let fixture: ComponentFixture<StepBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
