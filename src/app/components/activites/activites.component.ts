import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { fade } from 'src/app/animations/fade';
import { translate } from 'src/app/animations/animation';
import { Activite } from 'src/app/models/activite/activite';

@Component({
	selector: 'app-activites',
	templateUrl: './activites.component.html',
	styleUrls: ['./activites.component.css'],
	animations: [
		fade, translate
	]
})
export class ActivitesComponent implements OnInit {

	activites: any;
	id_membre: number = 0;
	error_msg_no_activities: number = 0;

	constructor(private activiteService: ActiviteService, private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.activiteService.getActivites().then((activites) => {
			this.activites = activites;
			this.error_msg_no_activities = 0;
		});
		this.id_membre = this.router.snapshot.params['id'];
		if (this.id_membre != undefined) {
			this.activiteService.getActivitesByMembre(this.id_membre).then((activites) => {
				if (activites) {
					this.activites = activites;
					this.error_msg_no_activities = 0;
				} else {
					this.activites = [];
					this.error_msg_no_activities = 1;
				}
			});
		}
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
