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

  getTask(result: number): void {
    const id = setInterval(() => {
      if (this.counter > this.past.length) {
        console.log('more');
        this.counter = this.counter - (this.counter - this.past.length);
      } else {
        this.counter++;
      }
    }, 500);
    setTimeout(() => {
      clearInterval(id);
    }, result * 500);
    this.currentTask = this.past[this.counter + result];
  }
}
