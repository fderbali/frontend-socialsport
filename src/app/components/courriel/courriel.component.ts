import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courriel } from 'src/app/models/courriel/courriel';
import { Membre } from 'src/app/models/membre/membre';
import { AuthService } from 'src/app/services/auth.service';
import { CourrielService } from 'src/app/services/courriel.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-courriel',
	templateUrl: './courriel.component.html',
	styleUrls: ['./courriel.component.css']
})
export class CourrielComponent implements OnInit {

	constructor(private courrielService: CourrielService, private route: ActivatedRoute, private membreService: MembreService, private authService: AuthService) { }
	courriel: any;
	membre_expediteur: any;
	membre_destinataire: any;

	ngOnInit(): void {
		this.courriel = this.courrielService.getCourriel(this.route.snapshot.params['id']).then((courriel) => {
			this.courriel = courriel;
			this.membreService.getMembre(this.courriel.id_expediteur).then((membre_expediteur) => {
				this.membre_expediteur = membre_expediteur;
				if (this.membre_expediteur.id != this.authService.id) {
					this.courrielService.mark_as_read(this.route.snapshot.params['id']);
				}
			});
			this.membreService.getMembre(this.courriel.id_destinataire).then((membre_destinataire) => {
				this.membre_destinataire = membre_destinataire;
			})
		});
	}

}
