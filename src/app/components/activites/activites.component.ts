import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
	selector: 'app-activites',
	templateUrl: './activites.component.html',
	styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

	activites: any = [];

	constructor(private activiteService: ActiviteService) { }

	ngOnInit(): void {
		this.activiteService.getActivites().then((activites) => {
			this.activites = activites;
		});
	}
	getActiviteImage(id: number) {
		switch (id) {
			case 1:
				return "/assets/images/tennis.jpg";
				break;
			case 2:
				return "/assets/images/soccer.jpg";
				break;
			case 3:
				return "/assets/images/hockey.jpg";
				break;
			case 4:
				return "/assets/images/badminton.jpg";
				break;
			case 5:
				return "/assets/images/squash.jpg";
				break;
			case 6:
				return "/assets/images/volley.jpg";
				break;
		}
		return true;
	}

}
