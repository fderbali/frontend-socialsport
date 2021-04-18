import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-membres',
	templateUrl: './membres.component.html',
	styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
	membres: any = [];
	id_activite: number = 0;
	error_msg_no_membres = 0;
	constructor(private membreService: MembreService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.membreService.getMembres().then((membres) => {
			this.membres = membres;
		});
		this.id_activite = this.route.snapshot.params['id'];
		if (this.id_activite != undefined) {
			this.membreService.getMembresByActivite(this.id_activite).then((membres) => {
				if (membres) {
					this.membres = membres;
					this.error_msg_no_membres = 0;
				} else {
					this.membres = [];
					this.error_msg_no_membres = 1;
				}
			});
		}
	}

}
