import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegsiterResponseModelModule } from 'src/app/models/regsiter-response-model/regsiter-response-model.module';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isAuth: boolean = false;
	message: string = "";
	userConnected: string = "";
	constructor(private httpClient: HttpClient) {
	}

	async signIn() {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					this.isAuth = true;
					resolve(true);
				}, 1000
			);
		});
	}

	signOut() {
		return new Promise((resolve) => {
			this.isAuth = false;
			resolve(true);
		});
	}

	register(values: any) {
		return new Promise((resolve, reject) => {
			this.httpClient.post<RegsiterResponseModelModule>('http://localhost:3000/api/createmembre', values)
				.subscribe(
					(response) => {
						this.isAuth = response.success;
						this.message = response.message;
						this.userConnected = values.email;
						resolve(this.message);
					},
					(error) => {
						this.isAuth = false;
						this.message = error.message;
						reject(this.message)
					}
				);
		});
	}
}
