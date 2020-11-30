import { Component } from '@angular/core';
import { BgGetTensesService } from '../bg-get-tenses.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  constructor(private pastSimple: BgGetTensesService) {}
  getPastS(): void {
    this.pastSimple.getPastSimple().subscribe((tasks) => {
      console.log(tasks);
    });
  }
}
