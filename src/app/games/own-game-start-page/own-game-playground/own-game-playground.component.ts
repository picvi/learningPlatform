import { Component, OnInit } from '@angular/core';
import { IQuestions } from '../asset/iquestions';
import { OwnGameService } from '../own-game.service';

@Component({
  selector: 'app-own-game-playground',
  templateUrl: './own-game-playground.component.html',
  styleUrls: ['./own-game-playground.component.scss']
})
export class OwnGamePlaygroundComponent implements OnInit {
  public questions!: IQuestions[];
  public isCategoryChosen = false;
  public currentCategory!: IQuestions | undefined;
  constructor(public svc: OwnGameService) {}

  ngOnInit(): void {
    this.questions = this.svc.questions;
    this.currentCategory = this.questions[0];
  }

  public chooseCategory(categoryName: string): void {
    this.isCategoryChosen = true;
    this.currentCategory = this.svc.chooseCategory(categoryName);
  }

  public goBack(): void {
    this.isCategoryChosen = false;
  }
}
