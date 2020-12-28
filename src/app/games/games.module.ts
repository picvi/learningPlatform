import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardGameComponent } from './board-game/board-game.component';
import { ModalComponent } from './board-game/modal/modal.component';
import { BoardGameDisplayComponent } from './board-game/board-game-display/board-game-display.component';
import { DiceComponent } from './board-game/dice/dice.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [
    BoardGameComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    GamesComponent,
    ModalComponent
  ],
  exports: [
    BoardGameComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    GamesComponent,
    ModalComponent,
    GamesRoutingModule
  ],
  imports: [CommonModule, GamesRoutingModule]
})
export class GamesModule {}
