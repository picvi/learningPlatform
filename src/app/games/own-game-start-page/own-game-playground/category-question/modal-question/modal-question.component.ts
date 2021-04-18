import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnGameService } from '../../../own-game.service';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.scss']
})
export class ModalQuestionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      question: string;
      score: number;
    },
    private svc: OwnGameService,
    private dialogRef: MatDialogRef<ModalQuestionComponent>
  ) {}

  public resolve(): void {
    this.close();
    this.svc.counterIncrement(this.data.score);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
