import { Component, OnInit } from '@angular/core';
import { translate } from 'src/app/animations/animation';
import { fade } from 'src/app/animations/fade';
import { rotate } from 'src/app/animations/rotate';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
	selector: 'app-myprofile',
	templateUrl: './myprofile.component.html',
	styleUrls: ['./myprofile.component.css'],
	animations: [
		translate, fade, rotate
	]
})
export class MyprofileComponent implements OnInit {

	constructor(private membreService: MembreService, private authService: AuthService) { }
	membre: any = {};
	age: number = 0;
	ngOnInit(): void {
		let id: number = this.authService.id;
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
