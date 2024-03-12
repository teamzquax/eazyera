import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditsComponent } from './components/edits/edits.component';
import { GetshootersComponent } from './components/getshooters/getshooters.component';
import { HomeComponent } from './components/home/home.component';
import { ShootsComponent } from './components/shoots/shoots.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShootersListComponent } from './components/shooters-list/shooters-list.component';
import { GetEditorsComponent } from './components/get-editors/get-editors.component';
import { GetProjectsComponent } from './components/get-projects/get-projects.component';
import { GetEventsComponent } from './components/get-events/get-events.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'edit', component: EditsComponent },
  { path: 'shoots', component: ShootsComponent },
  { path: 'getshooters', component: GetshootersComponent },
  { path: 'shooterlist', component: ShootersListComponent },
  { path: 'geteditors', component: GetEditorsComponent },
  { path: 'getprojects', component: GetProjectsComponent, canActivate: [AuthGuard] },
  { path: 'getevents', component: GetEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
