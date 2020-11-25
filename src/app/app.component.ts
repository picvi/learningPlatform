import { Component, OnInit} from '@angular/core';
import { BgPastService } from './bg-past.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'learningPlatform'; 

  constructor(private pastTense: BgPastService) {}
  past = this.pastTense.tasks;
  counter:number = 0;
  currentTask = this.past[0];
  finished = false;

  ngOnInit(): void {
    
  }

  pickTask(boardGame: Array<object>) {
    if (this.counter > boardGame.length) {
      console.log('more')
      this.counter = this.counter - (this.counter - boardGame.length);
    }
    this.currentTask = this.past[this.counter];
  }

  getTask(result:number) {
    this.counter += result;
    this.pickTask(this.past);
  }
}
