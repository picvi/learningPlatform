import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  value: any = null;
  header!: string;

  close(event: any): void {
    const instance = event.target.closest('APP-MODAL');
    instance.remove();
  }
}
