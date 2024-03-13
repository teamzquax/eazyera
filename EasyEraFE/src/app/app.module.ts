import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShootsComponent } from './components/shoots/shoots.component';
import { EditsComponent } from './components/edits/edits.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupService } from './services/signup.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GetshootersComponent } from './components/getshooters/getshooters.component';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ShootersListComponent } from './components/shooters-list/shooters-list.component';
import { GetEditorsComponent } from './components/get-editors/get-editors.component';
import { GetProjectsComponent } from './components/get-projects/get-projects.component';
import { GetEventsComponent } from './components/get-events/get-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ShootsComponent,
    EditsComponent,
    AboutusComponent,
    ContactComponent,
    GetshootersComponent,
    ShootersListComponent,
    GetEditorsComponent,
    GetProjectsComponent,
    GetEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesModule,
  ],
  providers: [SignupService, HttpClientModule, HttpClient, MessageService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
