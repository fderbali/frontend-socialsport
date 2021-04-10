import { Component, OnInit } from '@angular/core';
declare let M: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		let options = { "format": "dd/mm/yyyy", "autoClose": true };
		let elems = document.querySelectorAll('.datepicker');
		let instances = M.Datepicker.init(elems, options);
	}

}
