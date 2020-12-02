import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
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

  private subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private getTense: BgGetTensesService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.tense = this.getTense[params['tense']];
    });

    this.currentTask = this.tense[0];
  }

  getDiceResult(result: number): void {
    const id = setInterval(() => {
      if (this.counter > this.tense.length) {
        console.log('more');
        this.counter = this.counter - (this.counter - this.tense.length);
      } else {
        this.counter++;
      }
    }, 500);

    setTimeout(() => {
      clearInterval(id);
      this.currentTask = this.tense[this.counter];
      this.modal.clear();

      const taskModal = this.resolver.resolveComponentFactory(ModalComponent);
      const taskModalRef = this.modal.createComponent(taskModal);

      (<ModalComponent>taskModalRef.instance).value = {
        question: this.currentTask.question
      };
    }, result * 500);
  }
}
