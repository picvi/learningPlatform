import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input('category') public categoryName!: string;
  @Output('onCategoryChange')
  private categoryChange: EventEmitter<string> = new EventEmitter();

  public chooseCategory(): void {
    this.categoryChange.emit(this.categoryName);
  }
}
