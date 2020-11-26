import { Component } from '@angular/core';
import { BgPastService } from '../bg-past.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss'],
  providers: [BgPastService]
})
export class BoardGameComponent {
  constructor(private pastTense: BgPastService) {}

  past = this.pastTense.tasks;
  counter = 0;
  currentTask = this.past[0];

  pickTask(boardGame: Array<object>): void {
    if (this.counter > boardGame.length) {
      console.log('more');
      this.counter = this.counter - (this.counter - boardGame.length);
    }
    this.currentTask = this.past[this.counter];
  }

  getTask(result: number): void {
    const id = setInterval(
      () => ((this.counter += 1), console.log('step')),
      500
    );
    setTimeout(() => {
      clearInterval(id);
      this.pickTask(this.past);
    }, result * 500);
  }
}
