import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    }
  ) {}
}
