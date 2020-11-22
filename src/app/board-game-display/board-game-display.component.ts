import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game-display',
  templateUrl: './board-game-display.component.html',
  styleUrls: ['./board-game-display.component.scss']
})
export class BoardGameDisplayComponent implements OnInit {
  @Input() question!: string;
  @Input() path!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}