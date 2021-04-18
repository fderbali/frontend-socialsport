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
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{ path: "", component: ActivitesComponent },
	{ path: "activites", component: ActivitesComponent },
	{ path: "membres", canActivate: [AuthGuardService], component: MembresComponent },
	{ path: "courriels", canActivate: [AuthGuardService], component: CourrielsComponent },
	{ path: "login", component: LoginComponent },
	{ path: "myprofile", canActivate: [AuthGuardService], component: MyprofileComponent },
	{ path: "register", component: RegisterComponent },
	{ path: "add-activite", canActivate: [AuthGuardService], component: FormAddActiviteComponent },
	{ path: "activite/:id", component: ActiviteComponent },
	{ path: "membre/:id", canActivate: [AuthGuardService], component: MembreComponent },
	{ path: "courriel/:id", canActivate: [AuthGuardService], component: CourrielComponent },
	{ path: "membre/:id/activites", canActivate: [AuthGuardService], component: ActivitesComponent },
	{ path: "activite/:id/membres", canActivate: [AuthGuardService], component: MembresComponent },
	{ path: "not-found", component: FourOFourComponent },
	{ path: "**", redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
