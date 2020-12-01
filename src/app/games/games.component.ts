import { Component } from '@angular/core';
import { BgGetTensesService } from '../bg-get-tenses.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  constructor(private getTense: BgGetTensesService) {}
  tense!: any;
  getPastS(): void {
    this.getTense.getPastSimple().subscribe((tense) => {
      return (this.tense = { ...tense });
    });
    console.log(this.tense);
  }
}
