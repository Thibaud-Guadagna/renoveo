import { Component, OnInit } from "@angular/core";
import { StepService } from "../../../services/step-service/step-service";
import { StepBar } from "../../step-bar/step-bar";
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	Validators,
} from "@angular/forms";
import { validate } from "@angular/forms/signals";

@Component({
	selector: "app-designation-form",
	imports: [ReactiveFormsModule, StepBar],
	templateUrl: "./designation-form.html",
	styleUrl: "./designation-form.css",
})
export class DesignationForm implements OnInit {
	designationForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private stepService: StepService,
	) {}
	nextStep() {
		this.stepService.nextStep();
	}
	previousStep() {
		this.stepService.previousStep();
	}

	ngOnInit(): void {
		this.designationForm = this.fb.group({
			name: [""],
			adress: ["", Validators.required],
			complement: [""],
			postal_code: ["", Validators.required],
			city: ["", Validators.required],
			reference: [""],
		});
	}
}
