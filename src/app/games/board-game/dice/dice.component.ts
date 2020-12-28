import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input() turn!: boolean;
  @Output() onResult = new EventEmitter();
  diceResult!: number;

  rollDice(): void {
    this.diceResult = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    this.onResult.emit(this.diceResult);
  }
}
