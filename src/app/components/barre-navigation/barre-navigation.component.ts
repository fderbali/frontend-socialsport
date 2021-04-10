import { Component, Input, OnInit } from '@angular/core';
declare let M: any;
@Component({
	selector: 'app-barre-navigation',
	templateUrl: './barre-navigation.component.html',
	styleUrls: ['./barre-navigation.component.css']
})
export class BarreNavigationComponent implements OnInit {
	@Input() isAuth: boolean = false;
	constructor() { }

	ngOnInit(): void {
		let elemDropdown = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(elemDropdown, {
			coverTrigger: false
		});
	}

}
