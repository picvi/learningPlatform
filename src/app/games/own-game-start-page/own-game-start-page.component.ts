import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { OwnGameSvcService } from './own-game-svc.service';

@Component({
  selector: 'app-own-game-start-page',
  templateUrl: './own-game-start-page.component.html',
  styleUrls: ['./own-game-start-page.component.scss']
})
export class OwnGameStartPageComponent {
  public firstTeamName!: string;
  public secondTeamName!: string;
  public gameIsStarted = false;

  constructor(public svc: OwnGameSvcService, private renderer: Renderer2) {}

  public start(): void {
    this.svc.setTeamsNames(this.firstTeamName, this.secondTeamName);
    this.gameIsStarted = true;
  }
}
