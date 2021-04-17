import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardGameComponent } from './board-game/board-game.component';
import { GamesComponent } from './games.component';
import { OwnGameStartPageComponent } from './own-game-start-page/own-game-start-page.component';

const routes: Routes = [
  {
    path: 'games',
    children: [
      { path: '', component: GamesComponent },
      { path: 'boardGame/:tense', component: BoardGameComponent },
      { path: 'ownGame', component: OwnGameStartPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
