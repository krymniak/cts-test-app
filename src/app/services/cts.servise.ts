import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../interfaces";

@Injectable({
	providedIn: 'root'
})
export class CtsService {
	users: User[] = [{ "name": "Іван", "phone": "+380991234567", "email": "ivan@example.com", "gender": "Чоловік" },
	{ "name": "Марія", "phone": "+380991234568", "email": "maria@example.com", "gender": "Жінка" },
	{ "name": "Петро", "phone": "+380991234569", "email": "petro@example.com", "gender": "Чоловік" }]

	users$ = new BehaviorSubject<User[]>([])
	lastUser$ = new BehaviorSubject<User | null>(null)

	deleteUser(phone: string): void {
		const updatedUsers = this.users$.getValue().filter(user => user.phone !== phone)
		this.users$.next(updatedUsers)
	}

	addUser(user: User): void {
		const updatedUsers = [...this.users$.getValue(), user]
		this.users$.next(updatedUsers)
	}

}