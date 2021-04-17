import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegsiterResponse } from 'src/app/models/regsiter-response-model/regsiter-response';
import { LoginResponse } from '../models/login-response-model/login-response';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isAuth: boolean = false;
	message: string = "";
	userConnected: string = "";
	id: number = 0;
	constructor(private httpClient: HttpClient) {
	}

	signIn(values: any) {
		return new Promise((resolve, reject) => {
			this.httpClient.post<RegsiterResponse>('http://localhost:3000/api/login', values)
				.subscribe(
					(response) => {
						if (response.id) {
							this.isAuth = true;
							this.userConnected = values.email;
							this.id = response.id;
							resolve(response.message);
						} else {
							this.isAuth = false;
							this.message = response.message;
							resolve(response.message);
						}
					}, (error) => {
						this.isAuth = false;
						this.message = error.message;
						reject(error.message)
					}
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
			this.httpClient.post<LoginResponse>('http://localhost:3000/api/createmembre', values)
				.subscribe(
					(response) => {
						this.isAuth = response.success;
						this.message = response.message;
						this.userConnected = values.email;
						this.id = response.insert_id;
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
