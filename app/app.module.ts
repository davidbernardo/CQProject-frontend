import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//Component
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./home/nfound.component";
import { DashboardListComponent } from "./dashboard/dashboard-list.component";
import { SecretaryProfileComponent } from "./secretary/secretary-profile.component";
//Service
//Pipes
import { CommonModule } from "@angular/common";


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		CommonModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'aboutus', component: HomeComponent },
			{ path: 'dashboard/list', component: DashboardListComponent },
			{ path: 'secretary/profile/:id', component: SecretaryProfileComponent },
			{ path: '**', component: NotFoundComponent }
		])
	],
	exports: [
		RouterModule,
	],
	declarations: [
		//Component
		AppComponent,
		HomeComponent,
		NotFoundComponent,
		DashboardListComponent,
		SecretaryProfileComponent,
		//Pipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
