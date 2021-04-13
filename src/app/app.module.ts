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
import { ActiviteComponent } from './components/activite/activite.component';
import { MembreComponent } from './components/membre/membre.component';
import { CourrielComponent } from './components/courriel/courriel.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
		FormAddActiviteComponent,
		ActiviteComponent,
		MembreComponent,
		CourrielComponent,
		FourOFourComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		AuthService,
		AuthGuardService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
