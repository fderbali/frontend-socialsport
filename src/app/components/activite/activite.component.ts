import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-activite',
	templateUrl: './activite.component.html',
	styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

	id: number = 0;
	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
	}

}
