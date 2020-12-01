import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-game-display',
  templateUrl: './board-game-display.component.html',
  styleUrls: ['./board-game-display.component.scss']
})
export class BoardGameDisplayComponent {
  @Input() path!: string;
}
