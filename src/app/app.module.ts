import { NgModule, LOCALE_ID } from '@angular/core';
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
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TchatComponent } from './components/tchat/tchat.component';
import { RedigercourrielComponent } from './components/redigercourriel/redigercourriel.component';
registerLocaleData(localeFr);

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
		FourOFourComponent,
  TchatComponent,
  RedigercourrielComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule
	],
	providers: [
		AuthService,
		AuthGuardService,
		{ provide: LOCALE_ID, useValue: "fr-CA" }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
