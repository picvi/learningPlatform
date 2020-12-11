import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  toggler = false;
  value: any = null;
  header!: string;

  close(event: any): void {
    const instance = event.target.closest('APP-MODAL');
    instance.remove();
  }

  getDirection(
    task: any = [],
    playerCounter: number,
    playerTask: any = [],
    tense: []
  ): void {
    let step;
    if (task.hasOwnProperty('ahead')) {
      this.toggler = true;
      step = task.ahead <= 1 ? 'step' : 'steps';
      this.value = ` You have to go ${task.ahead} ${step} ahead`;

      const id = setInterval(() => {
        playerCounter++;
      }, 500);

      setTimeout(() => {
        clearInterval(id);
        playerTask = tense[playerCounter];
      }, task.ahead * 500);
    } else if (task.hasOwnProperty('behind')) {
      this.toggler = true;
      step = task.behind <= 1 ? 'step' : 'steps';
      this.value = ` You have to go ${task.behind} ${step} behind`;

      const id = setInterval(() => {
        playerCounter--;
      }, 500);

      setTimeout(() => {
        clearInterval(id);
        playerTask = tense[playerCounter];
      }, task.behind * 500);
    } else {
      this.showTask(task);
    }
  }

  showTask(task: any = []): void {
    console.log(task);
    this.header = 'Please answer the question';
    this.value = task?.question;
  }
}
