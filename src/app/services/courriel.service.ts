import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
