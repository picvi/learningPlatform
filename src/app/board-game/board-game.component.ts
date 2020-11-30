import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BgGetTensesService } from '../bg-get-tenses.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent {
  tense!: any[];
  private subscription!: Subscription;
  constructor(
    private getTenses: BgGetTensesService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(
      (params) => (this.tense = params['tense'])
    );
  }
  pastSimple = this.getTenses.getPastSimple();
  counter = 0;
  currentTask = this.pastSimple;

  getDiceResult(result: number): void {
    const id = setInterval(() => {
      // if (this.counter > this.pastSimple.length) {
      //   console.log('more');
      //   this.counter = this.counter - (this.counter - this.pastSimple.length);
      // } else {
      //   this.counter++;
      // }
      this.counter++;
    }, 500);
    setTimeout(() => {
      clearInterval(id);
    }, result * 500);
    this.counter += result;
    console.log(this.tense);
  }

  // getTask(tense: any[]): void {
  //   this.currentTask = tense[this.counter];
  // }
}
