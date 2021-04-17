import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { rotate } from 'src/app/animations/rotate';
declare let M: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [
		rotate
	]
})
export class LoginComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void { }

	onSignIn(form: NgForm) {
		this.authService.signIn(form.value).then(
			(message) => {
				if (this.authService.isAuth) {
					M.toast({ html: message, classes: 'rounded green', displayLength: 7000 });
					this.router.navigate(["myprofile"]).then(() => {
						setTimeout(() => {
							let elemDropdown = document.querySelectorAll('.dropdown-trigger');
							M.Dropdown.init(elemDropdown, {
								coverTrigger: false
							});
						}, 1000);
					});
				} else {
					M.toast({ html: message, classes: 'rounded red', displayLength: 7000 });
				}
			}
		).catch((error) => {
			M.toast({ html: "Une erreur s'est produite, veuillez re-essayer plus tard !", classes: 'rounded red', displayLength: 7000 });
		}).finally(() => {
		});

	}
}
