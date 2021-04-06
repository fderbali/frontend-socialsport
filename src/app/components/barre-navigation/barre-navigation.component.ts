import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-barre-navigation',
	templateUrl: './barre-navigation.component.html',
	styleUrls: ['./barre-navigation.component.css']
})
export class BarreNavigationComponent implements OnInit {
	@Input() isAuth: boolean = false;
	constructor() { }

	ngOnInit(): void {
	}

}
