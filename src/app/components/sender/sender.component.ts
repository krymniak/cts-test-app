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
		console.log(users)
		this.service.users$.next(users)
		this.displayedUsers$.next([])
		this.service.lastUser$.next(users[users.length - 1])
	}
	createJson() {
		const users = this.service.users$.getValue()
		console.log(users)
		this.displayedUsers$.next(users)
		const user2 = this.displayedUsers$.getValue()
		console.log(user2)
	}

}