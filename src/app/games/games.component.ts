import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BgGetTensesService } from '../bg-get-tenses.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  constructor(private getTense: BgGetTensesService, private router: Router) {}
  tense!: any;
  getPastS(): void {
    this.router.navigate(['boardGame', 'pastSimple']);
  }
  getPrPerfectPSimple(): void {
    this.router.navigate(['boardGame', 'prPerfectPastSimple']);
  }
}
