import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces';
import { CtsService } from 'src/app/services/cts.servise';
import { jsonArrayValidator } from './json.validator';

@Component({
	selector: 'app-sender',
	templateUrl: './sender.component.html',
	styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit{

	form!: FormGroup;

	users$ = this.service.users$.asObservable()
	displayedUsers$ = new BehaviorSubject<User[] | null>([])
	constructor(private service: CtsService) {
  }

	ngOnInit(): void {
		this.form = new FormGroup({
			jsonArray: new FormControl(JSON.stringify(this.service.users), [jsonArrayValidator()])
		})
	}
	

	getUsers() {
		const jsonArray = JSON.parse(this.form.value.jsonArray)
		const users = jsonArray
		this.service.users$.next(users)
		this.displayedUsers$.next([])
		this.form.setValue({jsonArray: []})
		this.service.lastUser$.next(users[users.length - 1])
	}
	createJson() {
		const users = this.service.users$.getValue()
		this.displayedUsers$.next(users)
		const myJsonString = JSON.stringify(users);
		this.form.setValue({jsonArray: myJsonString})
	}

}