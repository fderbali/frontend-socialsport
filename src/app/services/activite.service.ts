import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
