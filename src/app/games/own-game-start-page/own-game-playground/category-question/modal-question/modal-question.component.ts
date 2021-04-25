import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnGameService } from '../../../own-game.service';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.scss']
})
export class ModalQuestionComponent implements OnInit {
  public timer = 60;

  ngOnInit(): void {
    this.getTimer();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      question: string;
      score: number;
      isAudio?: boolean;
      audioPath?: string;
      audioName?: string;
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
  private getTimer(): void {
    const interval = setInterval(() => this.timer--, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  }
}
