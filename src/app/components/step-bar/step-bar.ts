import { Component, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { StepService } from '../../services/step-service/step-service';

@Component({
  selector: 'app-step-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-bar.html',
  styleUrl: './step-bar.css',
})
export class StepBar {
  steps = [1, 2, 3, 4, 5]; 
  currentStep = computed(() => this.stepService.currentStep());

  constructor(private stepService: StepService) {}
}
