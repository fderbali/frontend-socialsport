import { Injectable } from '@angular/core';
import { Membre } from '../models/membre/membre';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MembreService {

	constructor(private httpClient: HttpClient) { }

	getMembre(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<Membre>('http://localhost:3000/api/membre/' + id)
				.subscribe(
					(response) => {
						console.log(response);
						resolve(response);
					}
				);
		});
	}

	getMembres() {
		return new Promise((resolve) => {
			this.httpClient.get<Membre>('http://localhost:3000/api/membre')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}
}