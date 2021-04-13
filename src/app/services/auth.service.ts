import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegsiterResponseModelModule } from 'src/app/models/regsiter-response-model/regsiter-response-model.module';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isAuth: boolean = false;
	message: string = "";
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
		this.isAuth = false;
	}

	register(values: any) {
		return new Promise((resolve, reject) => {
			this.httpClient.post<RegsiterResponseModelModule>('http://localhost:3000/api/createmembre', values)
				.subscribe(
					(response) => {
						this.isAuth = response.success;
						this.message = response.message;
						if (this.message) {
							resolve(this.message)
						} else {
							reject("Une erreur s'est produite");
						}
					},
					(error) => {
						this.isAuth = false;
						this.message = error.message;
						if (this.message) {
							resolve(this.message)
						} else {
							reject("Une erreur s'est produite");
						}
					}
				);
		});
	}
}
