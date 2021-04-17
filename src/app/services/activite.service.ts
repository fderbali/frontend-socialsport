import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from '../models/activite/activite';
import { ActiviteResponse } from '../models/activite/ActiviteResponse';
@Injectable({
	providedIn: 'root'
})
export class ActiviteService {

	constructor(private httpClient: HttpClient) { }

	add(values: any) {
		return new Promise((resolve, reject) => {
			this.httpClient.post<ActiviteResponse>('http://localhost:3000/api/addactivite', values)
				.subscribe(
					(response) => {
						resolve(response);
					},
					(error) => {
						reject("Une erreur s'est produite ! Veuillez essayer plus tard")
					}
				);
		});
	}

	getActivites() {
		return new Promise((resolve) => {
			this.httpClient.get<Activite>('http://localhost:3000/api/activite')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}

	getActivite(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<Activite>('http://localhost:3000/api/activite/' + id)
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}

	getActivitesByMembre(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<Activite>('http://localhost:3000/api/membre/' + id + '/activites')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}
}

