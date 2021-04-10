import { Component, OnInit } from '@angular/core';
declare var M: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		var options = { "format": "dd/mm/yyyy", "autoClose": true };
		var elems = document.querySelectorAll('.datepicker');
		var instances = M.Datepicker.init(elems, options);
	}

}
