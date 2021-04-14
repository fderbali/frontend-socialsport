import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let M: any;
@Component({
	selector: 'app-barre-navigation',
	templateUrl: './barre-navigation.component.html',
	styleUrls: ['./barre-navigation.component.css']
})
export class BarreNavigationComponent implements OnInit {
	@Input() isAuth: boolean = false;
	@Input() userConnected: string = "";
	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	ngDoCheck(): void {
	}

	onLogout() {
		this.authService.signOut().then(() => {
			this.router.navigate([""]).then(() => {
			});
		});
	}
}
