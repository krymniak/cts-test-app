import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { CtsService } from 'src/app/services/cts.servise';
import { jsonArrayValidator } from './json.validator';

@Component({
	selector: 'app-sender',
	templateUrl: './sender.component.html',
	styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

	form!: FormGroup;

	users$ = this._service.users$.asObservable();
	constructor(private _service: CtsService) {
	}

	ngOnInit(): void {
		this.form = new FormGroup({
			jsonArray: new FormControl(JSON.stringify(this._service.users), [jsonArrayValidator()])
		})
	}


	getUsers() {
		const jsonArray = JSON.parse(this.form.value.jsonArray);
		const users = jsonArray;
		this._service.users$.next(users);
		this.form.setValue({ jsonArray: [] });
		this._service.lastUser$.next(users[users.length - 1]);
	}
	createJson() {
		const users = this._service.users$.getValue();
		const myJsonString = JSON.stringify(users);
		this.form.setValue({ jsonArray: myJsonString });
	}

}