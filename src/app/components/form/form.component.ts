import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces';
import { CtsService } from 'src/app/services/cts.servise';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	form!: FormGroup

	constructor(private service: CtsService) {

	}

	ngOnInit(): void {
		this.createForm()
	}

	createForm() {
		this.form = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁёІіЇї]*$/)]),
			phone: new FormControl('', [Validators.required, Validators.minLength(13), Validators.pattern('[- +()0-9]+')]),
			email: new FormControl('', [Validators.required, Validators.email]),
			gender: new FormControl('', [Validators.required])
		})
	}


	submit() {
		if (this.form.invalid) {
			Object.values(this.form.controls).forEach(control => {
				control.markAsTouched()
			})
			return
		}
		const user: User = {
			name: this.form.value.name,
			phone: this.form.value.phone,
			email: this.form.value.email,
			gender: this.form.value.gender
		}
		this.service.addUser(user)
		this.service.lastUser$.next(user)
		this.form.reset()
	}
}