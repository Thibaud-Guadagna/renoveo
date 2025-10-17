import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateGenerator } from './estimate-generator';

describe('EstimateGenerator', () => {
  let component: EstimateGenerator;
  let fixture: ComponentFixture<EstimateGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimateGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
