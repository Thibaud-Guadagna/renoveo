import { Injectable, signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StepService {

  	currentStep = signal(0);

  public nextStep() {
    if (this.currentStep() === 0) {
      this.currentStep.set(this.currentStep() + 1)
	} else {
	  
	}
  }
  public previousStep() {
    if (this.currentStep()) {
      this.currentStep.set(this.currentStep() - 1)
	} else {
	  
	}
  }
  
}
