import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardGameDisplayComponent } from './games/board-game/board-game-display/board-game-display.component';
import { GamesComponent } from './games/games.component';
import { DiceComponent } from './games/board-game/dice/dice.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardGameComponent } from './games/board-game/board-game.component';
import { LogInComponent } from './header/log-in/log-in.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BgGetTensesService } from './bg-get-tenses.service';
import { RegistrationService } from './registration.service';
import { ModalComponent } from './games/board-game/modal/modal.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    GamesComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    BoardGameComponent,
    MainComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [BgGetTensesService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
