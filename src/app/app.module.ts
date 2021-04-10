import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarreNavigationComponent } from './components/barre-navigation/barre-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MembresComponent } from './components/membres/membres.component';
import { CourrielsComponent } from './components/courriels/courriels.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RegisterComponent } from './components/register/register.component';
import { FormAddActiviteComponent } from './components/form-add-activite/form-add-activite.component';

@NgModule({
	declarations: [
		AppComponent,
		BarreNavigationComponent,
		FooterComponent,
		LoginComponent,
		ActivitesComponent,
		MembresComponent,
		CourrielsComponent,
		MyprofileComponent,
		RegisterComponent,
  FormAddActiviteComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
