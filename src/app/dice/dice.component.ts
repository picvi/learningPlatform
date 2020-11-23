import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Output() onResult = new EventEmitter();
  
  diceResult!: number;
  
  constructor() { }
  
  rollDice() {
    this.diceResult = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    this.onResult.emit(this.diceResult);
  }
  
  ngOnInit(): void {
  }

}
