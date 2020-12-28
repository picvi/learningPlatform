import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardGameComponent } from './board-game/board-game.component';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: 'games',
    children: [
      { path: '', component: GamesComponent },
      { path: 'boardGame/:tense', component: BoardGameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
