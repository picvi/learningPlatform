import { OnInit } from '@angular/core';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuestion } from '../../asset/iquestion';
import { OwnGameService } from '../../own-game.service';
import { ModalQuestionComponent } from './modal-question/modal-question.component';

@Component({
  selector: 'app-category-question',
  templateUrl: './category-question.component.html',
  styleUrls: ['./category-question.component.scss']
})
export class CategoryQuestionComponent {
  @Input('question') public question!: IQuestion;
  constructor(private dialog: MatDialog, private svc: OwnGameService) {}

  public openModal(): void {
    const instance = this.dialog.open(ModalQuestionComponent, {
      disableClose: true,
      hasBackdrop: true,
      data: { question: this.question.question, score: this.question.score }
    });
    instance.afterClosed().subscribe((data) => {
      this.question.checked = true;
      this.svc.setTurn();
    });
  }
}
