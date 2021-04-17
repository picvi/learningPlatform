import { OnInit } from '@angular/core';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuestion } from '../../asset/iquestion';
import { ModalQuestionComponent } from './modal-question/modal-question.component';

@Component({
  selector: 'app-category-question',
  templateUrl: './category-question.component.html',
  styleUrls: ['./category-question.component.scss']
})
export class CategoryQuestionComponent implements OnInit {
  @Input('question') public question!: IQuestion;
  @ViewChild('modal') private modalTemplate!: TemplateRef<any>;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.question);
  }
  public openModal(): void {
    const instance = this.dialog.open(ModalQuestionComponent, {
      data: { question: this.question.question }
    });
    instance.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
