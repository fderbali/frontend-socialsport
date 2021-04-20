import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CourrielService } from 'src/app/services/courriel.service';

@Component({
	selector: 'app-courriels',
	templateUrl: './courriels.component.html',
	styleUrls: ['./courriels.component.css']
})
export class CourrielsComponent implements OnInit {

	courriels: any = [];
	id_activite: number = 0;
	error_msg_no_courriels = 0;
	constructor(private courrielService: CourrielService, private route: ActivatedRoute, private authService: AuthService) { }

	ngOnInit(): void {
		this.courrielService.getCourriels(this.authService.id).then((courriels) => {
			if (courriels) {
				this.courriels = courriels;
				this.error_msg_no_courriels = 0;
			} else {
				this.courriels = [];
				this.error_msg_no_courriels = 1;
			}
		});
	}
}
