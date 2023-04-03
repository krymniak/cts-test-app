import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/interfaces';
import { CtsService } from 'src/app/services/cts.servise';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	lastUser$ = this.service.lastUser$.asObservable()
	constructor(private service: CtsService) {
	}

	ngOnInit(): void {

	}

}
