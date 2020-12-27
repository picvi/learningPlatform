import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';
import { ModalComponent } from '../modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private resolver: ComponentFactoryResolver) {}

  create(container: ViewContainerRef): any {
    const modal = this.resolver.resolveComponentFactory(ModalComponent);
    const modalRef: ComponentRef<ModalComponent> = container.createComponent(
      modal
    );
    return modalRef.instance;
  }
}
