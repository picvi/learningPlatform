import { Component } from '@angular/core';
import { OwnGameService } from './own-game.service';

@Component({
  selector: 'app-own-game-start-page',
  templateUrl: './own-game-start-page.component.html',
  styleUrls: ['./own-game-start-page.component.scss']
})
export class OwnGameStartPageComponent {
  public firstTeamName!: string;
  public secondTeamName!: string;
  public gameIsStarted = false;

  constructor(public svc: OwnGameService) {}

  public start(): void {
    this.svc.setTeamsNames(this.firstTeamName, this.secondTeamName);
    this.gameIsStarted = true;
  }
}
