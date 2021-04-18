import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwnGameService } from '../../own-game.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input('category') public categoryName!: string;
  @Output('onCategoryChange')
  private categoryChange: EventEmitter<string> = new EventEmitter();

  constructor(public svc: OwnGameService) {}

  public chooseCategory(): void {
    this.categoryChange.emit(this.categoryName);
  }
}
