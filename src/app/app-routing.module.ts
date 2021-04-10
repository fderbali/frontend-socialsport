import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MembresComponent } from './components/membres/membres.component';
import { CourrielsComponent } from './components/courriels/courriels.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RegisterComponent } from './components/register/register.component';
import { FormAddActiviteComponent } from './components/form-add-activite/form-add-activite.component';
import { CourrielComponent } from './components/courriel/courriel.component';
import { MembreComponent } from './components/membre/membre.component';
import { ActiviteComponent } from './components/activite/activite.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';

const routes: Routes = [
	{ path: "", component: ActivitesComponent },
	{ path: "activites", component: ActivitesComponent },
	{ path: "membres", component: MembresComponent },
	{ path: "courriels", component: CourrielsComponent },
	{ path: "login", component: LoginComponent },
	{ path: "myprofile", component: MyprofileComponent },
	{ path: "register", component: RegisterComponent },
	{ path: "add-activite", component: FormAddActiviteComponent },
	{ path: "activite/:id", component: ActiviteComponent },
	{ path: "membre/:id", component: MembreComponent },
	{ path: "courriel/:id", component: CourrielComponent },
	{ path: "not-found", component: FourOFourComponent },
	{ path: "**", redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
