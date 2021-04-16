import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { AuthService } from 'src/app/services/auth.service';
import { CategorieService } from 'src/app/services/categorie.service';

declare let M: any;
@Component({
	selector: 'app-form-add-activite',
	templateUrl: './form-add-activite.component.html',
	styleUrls: ['./form-add-activite.component.css']
})
export class FormAddActiviteComponent implements OnInit {

	constructor(private activiteService: ActiviteService, private categorieService: CategorieService, private router: Router, private authService: AuthService) { }

	date_debut_activite: string = "";
	date_fin_activite: string = "";
	categories: any = [];
	userConnected: string = this.authService.userConnected;

	ngOnInit(): void {
		this.categorieService.getCategories().then((categories) => {
			this.categories = categories;
		});

		let options1 = {
			"format": "dd/mm/yyyy", "autoClose": true, "onSelect": (d: any) => {
				let timestamp = Date.parse(d);
				let date: Date = new Date(timestamp);
				this.date_debut_activite = date.toISOString().split('T')[0];
			}
		};
		let elems1 = document.querySelectorAll('.datepicker-date-debut');
		let instances1 = M.Datepicker.init(elems1, options1);

		let options2 = {
			"format": "dd/mm/yyyy", "autoClose": true, "onSelect": (d: any) => {
				let timestamp = Date.parse(d);
				let date: Date = new Date(timestamp);
				this.date_fin_activite = date.toISOString().split('T')[0];
			}
		};
		let elems2 = document.querySelectorAll('.datepicker-date-fin');
		let instances2 = M.Datepicker.init(elems2, options2);
	}

	onSubmit(faddactivite: NgForm) {
		faddactivite.value.userConnected = this.userConnected;
		this.activiteService.add(faddactivite.value).then(
			(response: any) => {
				if (response.success) {
					M.toast({ html: response.message, classes: 'rounded green', displayLength: 7000 });
					this.router.navigate([""]).then(() => { });
				} else {
					M.toast({ html: response.message, classes: 'rounded red', displayLength: 7000 });
				}
			}
		).catch((error) => {
		}).finally(() => {
		});
	}
}

