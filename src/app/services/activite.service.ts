import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from '../models/activite/activite';
import { ActiviteResponse } from '../models/activite/ActiviteResponse';
import { GlobalResponse } from '../models/GlobalResponse';
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
			this.httpClient.get<[Activite]>('http://localhost:3000/api/activite')
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
			this.httpClient.get<[Activite]>('http://localhost:3000/api/membre/' + id + '/activites')
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

	inscrire(id_membre: number, id_activite: number) {
		return new Promise((resolve) => {
			this.httpClient.post<GlobalResponse>('http://localhost:3000/api/membre/inscrire', { 'id_membre': id_membre, 'id_activite': id_activite })
				.subscribe(
					(response) => {
						resolve(response.message);
					}
				);
		})
	}

	check_inscription(id_membre: number, id_activite: number) {
		return new Promise((resolve) => {
			this.httpClient.post<GlobalResponse>('http://localhost:3000/api/membre/check_inscription', { 'id_membre': id_membre, 'id_activite': id_activite })
				.subscribe(
					(response) => {
						resolve(response.subscribed);
					}
				);
		})
	}
}

