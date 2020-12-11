import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardGameComponent } from './games/board-game/board-game.component';
import { GamesComponent } from './games/games.component';
import { LogInComponent } from './header/log-in/log-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'logIn', component: LogInComponent },
  {
    path: 'games',
    children: [
      { path: '', component: GamesComponent },
      { path: 'boardGame/:tense', component: BoardGameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
