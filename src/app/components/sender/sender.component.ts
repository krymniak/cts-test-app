import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces';
import { CtsService } from 'src/app/services/cts.servise';

@Component({
	selector: 'app-sender',
	templateUrl: './sender.component.html',
	styleUrls: ['./sender.component.scss']
})
export class SenderComponent {

	@ViewChild('jsonInput') jsonInput: any;
	users$ = this.service.users$.asObservable()
	displayedUsers$ = new BehaviorSubject<User[] | null>([])
	constructor(private service: CtsService) {
		this.displayedUsers$.next(this.service.users)
	}

	getUsers() {
		const jsonArray = JSON.parse(this.jsonInput.nativeElement.value)
		const users = jsonArray
		this.service.users$.next(users)
		this.displayedUsers$.next([])
		this.jsonInput.nativeElement.value = []
		this.service.lastUser$.next(users[users.length - 1])
	}
	createJson() {
		const users = this.service.users$.getValue()
		this.displayedUsers$.next(users)
		const myJsonString = JSON.stringify(users);
		this.jsonInput.nativeElement.value = myJsonString
	}

}