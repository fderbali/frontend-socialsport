import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare let M: any;
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	birthdate: string = "";
	constructor(private authService: AuthService, private router: Router) {

	}

	ngOnInit(): void {
		let options = {
			"format": "dd/mm/yyyy", "autoClose": true, "onSelect": (d: any) => {
				let timestamp = Date.parse(d);
				let date: Date = new Date(timestamp);
				this.birthdate = date.toISOString().split('T')[0];
			}
		};
		let elems = document.querySelectorAll('.datepicker');
		let instances = M.Datepicker.init(elems, options);
	}

	onSubmit(form: NgForm) {
		this.authService.register(form.value).then(
			(message) => {
				if (this.authService.isAuth) {
					M.toast({ html: message, classes: 'rounded green', displayLength: 7000 });
					this.router.navigate([""]);
				} else {
					M.toast({ html: message, classes: 'rounded red', displayLength: 7000 });
				}
			}
		).catch((error) => {
			M.toast({ html: "Une erreur s'est produite, veuillez re-essayer plus tard !", classes: 'rounded red', displayLength: 7000 });
		});
	}
}
