import { Component } from '@angular/core';
import { CtsService } from 'src/app/services/cts.servise';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent {
	users$ = this._service.users$.asObservable();
	sortDirection = 'asc';
	sortBy = '';

	constructor(private _service: CtsService) {
	}

	deleteUser(phone: string) {
		this._service.deleteUser(phone)
	}

	sort(field: string) {
		if (this.sortBy === field) {
			this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			this.sortBy = field;
			this.sortDirection = 'asc';
		}

		this._service.users$.getValue().sort((a, b) => {
			const aValue = a[field];
			const bValue = b[field];

			if (aValue < bValue) {
				return this.sortDirection === 'asc' ? -1 : 1;
			} else if (aValue > bValue) {
				return this.sortDirection === 'asc' ? 1 : -1;
			} else {
				return 0;
			}
		});
	}


}