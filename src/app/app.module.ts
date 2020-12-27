import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GamesModule } from './games/games.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './header/log-in/log-in.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BgGetTensesService } from './bg-get-tenses.service';
import { RegistrationService } from './registration.service';
import { from } from 'rxjs';
import { HideOnScrollDirective } from './hide-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    MainComponent,
    HideOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    GamesModule
  ],
  providers: [BgGetTensesService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
