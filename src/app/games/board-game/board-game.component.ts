import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BgGetTensesService } from 'src/app/bg-get-tenses.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent implements OnInit {
  tense: any = [];
  counter = 0;
  currentTask: any = [];

  private subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private getTense: BgGetTensesService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.tense = this.getTense[params['tense']];
    });

    this.currentTask = this.tense[0];
    console.log('onInit', this.currentTask);
  }

  getDiceResult(result: number): void {
    const id = setInterval(() => {
      if (this.counter > this.tense.length) {
        console.log('more');
        this.counter = this.counter - (this.counter - this.tense.length);
      } else {
        console.log(`counting ${this.counter}`);
        this.counter++;
      }
    }, 500);
    setTimeout(() => {
      console.log('timeOUT');
      clearInterval(id);
    }, result * 500);
    this.currentTask = this.tense[(this.counter += result)];
    console.log(`counter result ${this.counter}`);
    console.log('after summing', this.currentTask);
  }
}
