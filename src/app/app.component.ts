import { Component} from '@angular/core';
import { BgPastService } from './bg-past.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learningPlatform'; 

  constructor(private pastTense: BgPastService) {}
  past = this.pastTense.tasks;
  counter:number = 0;
  currentTask: any;

  pickTask(boardGame:any) {
    this.currentTask = boardGame[this.counter]
    this.counter <= boardGame.length ? console.log(this.currentTask) : console.log("You've finished the game!")
  }

  getTask(result:number) {
    this.counter += result;
    this.pickTask(this.past);
  }
}
