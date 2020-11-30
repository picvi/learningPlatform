import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BgGetTensesService } from '../bg-get-tenses.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent {
  @Input() tense: any;
  counter = 0;
  currentTask = this.tense[0];

  getDiceResult(result: number): void {
    const id = setInterval(() => {
      if (this.counter > this.tense.length) {
        console.log('more');
        this.counter = this.counter - (this.counter - this.tense.length);
      } else {
        this.counter++;
      }
    }, 500);
    setTimeout(() => {
      clearInterval(id);
    }, result * 500);
    this.currentTask = this.tense[(this.counter += result)];
    console.log(this.tense);
  }

  // getTask(tense: any[]): void {
  // }
}
