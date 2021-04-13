import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
	}
	/*onSignIn() {
		this.authService.signIn().then(
			() => {
				this.isAuth = this.authService.isAuth;
				this.router.navigate(["/myprofile"]);
			}
		);
	}

	onSignOut() {
		this.authService.signOut();
		this.isAuth = this.authService.isAuth;
	}*/
}
