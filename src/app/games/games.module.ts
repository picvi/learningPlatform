import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardGameComponent } from './board-game/board-game.component';
import { ModalComponent } from './board-game/modal/modal.component';
import { BoardGameDisplayComponent } from './board-game/board-game-display/board-game-display.component';
import { DiceComponent } from './board-game/dice/dice.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { OwnGameStartPageComponent } from './own-game-start-page/own-game-start-page.component';
import { OwnGamePlaygroundComponent } from './own-game-start-page/own-game-playground/own-game-playground.component';
import { CategoryCardComponent } from './own-game-start-page/own-game-playground/category-card/category-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CategoryQuestionComponent } from './own-game-start-page/own-game-playground/category-question/category-question.component';
import { ModalQuestionComponent } from './own-game-start-page/own-game-playground/category-question/modal-question/modal-question.component';

@NgModule({
  declarations: [
    BoardGameComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    GamesComponent,
    ModalComponent,
    OwnGameStartPageComponent,
    OwnGamePlaygroundComponent,
    CategoryCardComponent,
    CategoryQuestionComponent,
    ModalQuestionComponent
  ],
  exports: [
    BoardGameComponent,
    BoardGameDisplayComponent,
    DiceComponent,
    GamesComponent,
    ModalComponent,
    GamesRoutingModule
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class GamesModule {}
