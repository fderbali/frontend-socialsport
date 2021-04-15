import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-membre',
	templateUrl: './membre.component.html',
	styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

	constructor(private membreService: MembreService, private route: ActivatedRoute) { }
	membre: any = {};
	age: number = 0;
	ngOnInit(): void {
		let id: number = this.route.snapshot.params['id'];
		this.membreService.getMembre(id).then((membre) => {
			this.membre = membre;
			this.calculateAge();
		})
	}

	calculateAge() { // birthday is a date
		var dob = new Date(this.membre.date_de_naissance);
		//calculate month difference from current date in time
		var month_diff = Date.now() - dob.getTime();

		//convert the calculated difference in date format
		var age_dt = new Date(month_diff);

		//extract year from date
		var year = age_dt.getUTCFullYear();

		//now calculate the age of the user
		var age = Math.abs(year - 1970);
		this.age = age;
	}
}
