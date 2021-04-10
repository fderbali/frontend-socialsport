import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Sport plus';
	isAuth: boolean = true;
	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
		this.isAuth = this.authService.isAuth;
	}

	onSignIn() {
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
	}
}
