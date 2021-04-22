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

	getMembresByActivite(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<[Membre]>('http://localhost:3000/api/activite/' + id + '/membres')
				.subscribe(
					(response) => {
						if (Array.isArray(response)) {
							resolve(response);
						} else {
							resolve(false);
						}
					}
				);
		});
	}
	getOrganisateur(id_activite: number) {
		return new Promise((resolve) => {
			this.httpClient.get<[Membre]>('http://localhost:3000/api/activite/' + id_activite + '/organisateur')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}
}
