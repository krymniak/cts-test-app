import { Component, OnInit } from '@angular/core';
import { CtsService } from 'src/app/services/cts.servise';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	lastUser$ = this._service.lastUser$.asObservable()
	constructor(private _service: CtsService) {
	}

	ngOnInit(): void {

	}

}
