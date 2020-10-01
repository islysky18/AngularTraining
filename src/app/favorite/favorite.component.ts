import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
  // styles: [
  //   `
  //     .glyphicon {
  //       color: green;
  //     }

  //     .glyphicon-star {
  //       background: black;
  //     }
  //   `,
  // ],

  //inputs: ['isFavorite'],//input property
})
export class FavoriteComponent {
  @Input('isFavorite') //alias input property:@Input('is-favorite')
  isSelected: boolean;

  @Output('change') //alias output property
  click = new EventEmitter();
  constructor() {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newVale: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
