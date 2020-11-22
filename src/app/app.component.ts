import { Component } from '@angular/core';
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
}
