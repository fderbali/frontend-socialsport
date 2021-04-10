import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MembresComponent } from './components/membres/membres.component';
import { CourrielsComponent } from './components/courriels/courriels.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RegisterComponent } from './components/register/register.component';
import { FormAddActiviteComponent } from './components/form-add-activite/form-add-activite.component';

const routes: Routes = [
	{ path: "", component: ActivitesComponent },
	{ path: "activites", component: ActivitesComponent },
	{ path: "membres", component: MembresComponent },
	{ path: "courriels", component: CourrielsComponent },
	{ path: "login", component: LoginComponent },
	{ path: "myprofile", component: MyprofileComponent },
	{ path: "register", component: RegisterComponent },
	{ path: "add-activite", component: FormAddActiviteComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
