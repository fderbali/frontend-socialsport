import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-membres',
	templateUrl: './membres.component.html',
	styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
	membres: any = [];

	constructor(private membreService: MembreService) { }

	ngOnInit(): void {
		this.membreService.getMembres().then((membres) => {
			this.membres = membres;
		});
	}

}
