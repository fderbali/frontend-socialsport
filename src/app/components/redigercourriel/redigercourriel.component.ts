import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { CourrielService } from 'src/app/services/courriel.service';
declare let M: any;
@Component({
	selector: 'app-redigercourriel',
	templateUrl: './redigercourriel.component.html',
	styleUrls: ['./redigercourriel.component.css']
})
export class RedigercourrielComponent implements OnInit {

	constructor(private courrielService: CourrielService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
	id_user_connected: number = 0;
	ngOnInit(): void {
	}

	onSubmit(ecrirecourriel: NgForm) {
		ecrirecourriel.value.id_expediteur = this.authService.id;
		ecrirecourriel.value.id_destinataire = this.route.snapshot.params['id'];
		this.courrielService.send(ecrirecourriel.value).then(
			(response: any) => {
				if (response.success) {
					M.toast({ html: response.message, classes: 'rounded green', displayLength: 7000 });
					this.router.navigate(["membre/" + this.route.snapshot.params['id']]).then(() => { });
				} else {
					M.toast({ html: response.message, classes: 'rounded red', displayLength: 7000 });
				}
			}
		).catch((error) => {
		}).finally(() => {
		});
	}
}
