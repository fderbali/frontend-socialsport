import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie/categorie';

@Injectable({
	providedIn: 'root'
})
export class CategorieService {

	constructor(private httpClient: HttpClient) { }
	getCategories() {
		return new Promise((resolve) => {
			this.httpClient.get<Categorie>('http://localhost:3000/api/categorie')
				.subscribe(
					(response) => {
						resolve(response);
					}
				);
		});
	}
}
