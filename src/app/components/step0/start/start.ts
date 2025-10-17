import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Navbar } from "../../navbar/navbar";
import { Footer } from "../../footer/footer";
import { StepService } from "../../../services/step-service/step-service";





@Component({
	selector: "app-start",
	imports: [Navbar, Footer],
	templateUrl: "./start.html",
	styleUrl: "./start.css",
})
export class Start {
	constructor(private stepService: StepService) {}

	nextStep() {
		this.stepService.nextStep();
	}
  previousStep() {
    this.stepService.previousStep();
  }
}
