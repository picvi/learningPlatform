import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  constructor(private router: Router) {}
  tense!: any;
  getPastS(): void {
    this.router.navigate(['boardGame', 'pastSimple']);
  }
  getPrPerfectPSimple(): void {
    this.router.navigate(['boardGame', 'prPerfectPastSimple']);
  }
}
