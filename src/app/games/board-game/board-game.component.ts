import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BgGetTensesService } from 'src/app/bg-get-tenses.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent implements OnInit {
  @ViewChild('taskModal', { read: ViewContainerRef }) modal: any;
  @ViewChild('confirm', { read: ViewContainerRef }) confirm: any;

  tense: any = [];
  counterPl1 = 0;
  counterPl2 = 0;
  taskPlayer1: any = [];
  taskPlayer2: any = [];
  modalWindow: any = null;

  private subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private getTense: BgGetTensesService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.tense = this.getTense[params['tense']];
    });

    this.taskPlayer1 = this.tense[0];
    this.taskPlayer2 = this.tense[0];
  }

  dicePlayer1(result: number): void {
    const promise = new Promise((resolve) => {
      const id = setInterval(() => {
        this.counterPl1++;
      }, 500);

      setTimeout(() => {
        clearInterval(id);
        this.taskPlayer1 = this.tense[this.counterPl1];
        return resolve(this.taskPlayer1);
      }, result * 500);
    });

    promise.then((result) => {
      this.showModal(result, this.counterPl1, this.taskPlayer1, this.tense);
    });
  }

  dicePlayer2(result: number): void {
    const promise = new Promise((resolve) => {
      const id = setInterval(() => {
        this.counterPl2++;
      }, 500);

      setTimeout(() => {
        clearInterval(id);
        this.taskPlayer2 = this.tense[this.counterPl2];
        return resolve(this.taskPlayer2);
      }, result * 500);
    });

    promise.then((result) => {
      this.showModal(result, this.counterPl2, this.taskPlayer2, this.tense);
    });
  }

  showModal(
    task: any = [],
    playerCounter: number,
    playerTask: any = [],
    tense: []
  ): void {
    const taskModal = this.resolver.resolveComponentFactory(ModalComponent);
    const taskModalRef: ComponentRef<ModalComponent> = this.modal.createComponent(
      taskModal
    );
    taskModalRef.instance.getDirection(task, playerCounter, playerTask, tense);
  }
}
