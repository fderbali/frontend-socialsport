import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { translate } from 'src/app/animations/animation';
import { fade } from 'src/app/animations/fade';
import { Activite } from 'src/app/models/activite/activite';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
	selector: 'app-activite',
	templateUrl: './activite.component.html',
	styleUrls: ['./activite.component.css'],
	animations: [
		translate, fade
	]
})
export class ActiviteComponent implements OnInit {

	id: number = 0;
	activite: any;
	constructor(private route: ActivatedRoute, private activiteService: ActiviteService) { }


	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
		this.activiteService.getActivite(this.id).then((activite) => {
			this.activite = activite;
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
