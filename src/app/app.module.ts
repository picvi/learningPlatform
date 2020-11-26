import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardGameDisplayComponent } from './board-game/board-game-display/board-game-display.component';
import { DiceComponent } from './board-game/dice/dice.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BoardGameComponent } from './board-game/board-game.component';
import { UsersDataService } from './users-data.service';
import { LogInComponent } from './header/log-in/log-in.component';
import { GamesComponent } from './games/games.component';

const appRoutes: Routes = [
  { path: 'boardGame', component: BoardGameComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'games', component: GamesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    HeaderComponent,
    SignUpComponent,
    BoardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
