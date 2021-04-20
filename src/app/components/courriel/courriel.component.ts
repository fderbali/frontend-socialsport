import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courriel } from 'src/app/models/courriel/courriel';
import { Membre } from 'src/app/models/membre/membre';
import { CourrielService } from 'src/app/services/courriel.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-courriel',
	templateUrl: './courriel.component.html',
	styleUrls: ['./courriel.component.css']
})
export class CourrielComponent implements OnInit {

	constructor(private courrielService: CourrielService, private route: ActivatedRoute, private membreService: MembreService) { }
	courriel: any;//Courriel = { id: 0, sujet: '', message: '', id_destinataire: 0, id_expediteur: 0, date: "", courriel_lu: '' };
	membre_expediteur: any;

	ngOnInit(): void {
		this.courriel = this.courrielService.getCourriel(this.route.snapshot.params['id']).then((courriel) => {
			this.courriel = courriel;
			this.membreService.getMembre(this.courriel.id_expediteur).then((membre_expediteur) => {
				this.membre_expediteur = membre_expediteur;
			})
		});
		this.courrielService.mark_as_read(this.route.snapshot.params['id']);
	}

}
