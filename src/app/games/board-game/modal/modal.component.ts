import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  value: any = null;
  header!: string;
  confirmation!: boolean;

  private onClose$: Subject<any> = new Subject();
  public onClose: Observable<any> = this.onClose$.asObservable();

  close(event: any): void {
    const instance = event.target.closest('APP-MODAL');
    instance.remove();
    this.onClose$.next();
    this.onClose$.complete();
  }
}
