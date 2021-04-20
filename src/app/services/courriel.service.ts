import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courriel } from '../models/courriel/courriel';

@Injectable({
	providedIn: 'root'
})
export class CourrielService {

	constructor(private httpClient: HttpClient) { }
	send(values: any) {
		return new Promise((resolve) => {
			this.httpClient.post('http://localhost:3000/api/sendcourriel', values)
				.subscribe(
					(response) => {
						resolve(response);
					},
					(error) => {
						resolve("Une erreur s'est produite ! Veuillez essayer plus tard")
					}
				);
		});
	}

	getCourriels(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<[Courriel]>('http://localhost:3000/api/membre/' + id + '/courriels')
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

	getCourriel(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<Courriel>('http://localhost:3000/api/courriel/' + id)
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}

	mark_as_read(id: number) {
		return new Promise((resolve) => {
			this.httpClient.get<Courriel>('http://localhost:3000/api/courriel/' + id + '/mark_as_read')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}
}
