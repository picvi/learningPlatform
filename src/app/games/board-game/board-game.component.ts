import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BgGetTensesService } from 'src/app/bg-get-tenses.service';
import { TaskModel } from 'src/app/task-model';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/service/modal.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss'],
  providers: [ModalService]
})
export class BoardGameComponent implements OnInit {
  @ViewChild('taskModal', { read: ViewContainerRef }) modal: any;
  tense: any = [];
  counterPl1 = 0;
  counterPl2 = 0;
  taskPlayer1!: TaskModel;
  taskPlayer2!: TaskModel;
  modalWindow: any = null;
  turn1 = true;
  turn2 = false;
  confirmation = false;

  private subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private getTense: BgGetTensesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.tense = this.getTense[params['tense']];
    });

    this.taskPlayer1 = this.tense[0];
    this.taskPlayer2 = this.tense[0];
  }

  dicePlayer(result: number, counter: keyof BoardGameComponent): void {
    this.turn1 = !this.turn1;
    this.turn2 = !this.turn2;
    const id = setInterval(() => {
      this[counter]++;
    }, 500);

    setTimeout(() => {
      clearInterval(id);
      if (this[counter] >= this.tense.length) {
        this.turn1 = false;
        this.turn2 = false;
      }
      this.getDirection(this.tense[this[counter]], counter);
    }, result * 500);
  }

  getDirection(task: TaskModel, playerCounter: keyof BoardGameComponent): void {
    let step: string;
    if (task <= this.tense.length) {
      if (task?.hasOwnProperty('movement')) {
        const stepAmount = task.movement.step;
        step = stepAmount === 1 ? 'step' : 'steps';
        const modal = this.showModal(
          'Confirm',
          `You have to go ${stepAmount} ${step} ${task?.movement?.direction}`,
          true
        );
        modal.onClose.subscribe(() => {
          let id: any;
          if (task?.movement?.direction === 'ahead') {
            id = setInterval(() => {
              this[playerCounter]++;
            }, 500);
          } else {
            id = setInterval(() => {
              this[playerCounter]--;
            }, 500);
          }
          setTimeout(() => {
            clearInterval(id);
            this.showModal(
              'Please answer the question',
              this.tense[this[playerCounter]]?.question,
              false
            );
          }, stepAmount * 500);
        });
      } else {
        this.showModal(
          'Please answer the question',
          this.tense[this[playerCounter]]?.question,
          false
        );
      }
  
    }
  }

  showModal(
    header: string,
    value: string | TaskModel,
    isTrue: boolean
  ): ModalComponent {
    const taskModal = this.modalService.create(this.modal);

    taskModal.header = header;
    taskModal.value = value;
    taskModal.confirmation = isTrue;
    return taskModal;
  }
}
