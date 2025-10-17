import { Component, signal } from "@angular/core";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { Start } from "../../../components/step0/start/start";
import { DesignationForm } from "../../../components/step1/designation-form/designation-form";
import { StepService } from "../../../services/step-service/step-service";
import { NgClass } from "@angular/common";


@Component({
	selector: "app-estimate-generator",
	imports: [Navbar, Start, DesignationForm, NgClass],
	templateUrl: "./estimate-generator.html",
	styleUrl: "./estimate-generator.css",
})
export class EstimateGenerator {
  currentStep; 

  isMobile = signal(false);

  constructor(private stepService: StepService) {
    this.checkMobile();
    this.currentStep = this.stepService.currentStep; 
  }

  private checkMobile() {
    this.isMobile.set(window.innerWidth < 1024);
  }
}

