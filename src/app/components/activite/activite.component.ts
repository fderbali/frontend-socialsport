import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { translate } from 'src/app/animations/animation';
import { fade } from 'src/app/animations/fade';
import { Activite } from 'src/app/models/activite/activite';
import { ActiviteService } from 'src/app/services/activite.service';
import { AuthService } from 'src/app/services/auth.service';
declare let M: any;
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
	member_is_subscribed_to_current_activite: any;

	constructor(private route: ActivatedRoute, private activiteService: ActiviteService, private authService: AuthService) { }


	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
		this.activiteService.getActivite(this.id).then((activite) => {
			this.activite = activite;
			this.check_inscription(this.id);
		});
	}

	onHelp(){
		let elems = document.querySelectorAll('.tap-target');
		let instances = M.TapTarget.init(elems, {});
		let instance = M.TapTarget.getInstance(elems[0]);
  		instance.open();
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

	inscrire(id_activite: number) {
		if (this.authService.isAuth) {
			this.activiteService.inscrire(this.authService.id, id_activite).then((response) => {
				M.toast({ html: response, classes: 'rounded green', displayLength: 7000 });
				this.check_inscription(this.activite.id);
			});
		} else {
			M.toast({ html: "Veuillez vous connecter d'abord !", classes: 'rounded red', displayLength: 7000 });
		}
	}

	check_inscription(id_activite: number) {
		if (this.authService.isAuth) {
			this.activiteService.check_inscription(this.authService.id, id_activite).then((response) => {
				this.member_is_subscribed_to_current_activite = response;
			});
		} else {
			this.member_is_subscribed_to_current_activite = false;
		}
	}

	desinscrire(id_activite: number) {
		if (this.authService.isAuth) {
			this.activiteService.desinscrire(this.authService.id, id_activite).then((response) => {
				M.toast({ html: response, classes: 'rounded green', displayLength: 7000 });
				this.check_inscription(this.activite.id);
			});
		} else {
			M.toast({ html: "Veuillez vous connecter d'abord !", classes: 'rounded red', displayLength: 7000 });
		}
	}
}
