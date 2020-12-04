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

  tense: any = [];
  counter = 0;
  currentTask: any = [];
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

    this.currentTask = this.tense[0];
  }

  getDiceResult(result: number): void {
    const id = setInterval(() => {
      this.counter++;
    }, 500);

    setTimeout(() => {
      clearInterval(id);
      this.currentTask = this.tense[this.counter];
      if (this.currentTask.hasOwnProperty('behind')) {
        const stepsBehind = this.currentTask.behind;
        this.counter -= stepsBehind;
        const message = `You have to go ${stepsBehind} steps behind`;
        this.showModal(message);
      }
      if (this.currentTask.hasOwnProperty('ahead')) {
        const stepsAhead = this.currentTask.ahead;
        this.counter += stepsAhead;
        const message = `You have to go ${stepsAhead} steps ahead`;
        this.showModal(message);
      }
    }, result * 500);
    setTimeout(() => {
      if (this.counter >= this.tense.length) {
        this.showModal('Congratulations! You have finished the game');
      } else {
        this.showModal('Please answer the question', this.currentTask);
      }
    }, result * 900);
  }
  showModal(header: string, task?: any[]): void {
    const taskModal = this.resolver.resolveComponentFactory(ModalComponent);
    const taskModalRef: ComponentRef<ModalComponent> = this.modal.createComponent(
      taskModal
    );
    taskModalRef.instance.header = header;
    taskModalRef.instance.value = task;
  }
}
