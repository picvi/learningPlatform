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
  counter:number =0;

  pickTask(boardGame:any) {
    this.counter <= boardGame.length ? console.log(boardGame[this.counter]?.question) : console.log('You finished the game!')
    
  }

  getTask(result:number) {
    this.counter += result;
    this.pickTask(this.past);
  }
}
