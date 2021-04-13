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
	isAuth: boolean = this.authService.isAuth;;
	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
		this.isAuth = this.authService.isAuth;
	}

	ngDoCheck() {
		this.isAuth = this.authService.isAuth;
	}
}
