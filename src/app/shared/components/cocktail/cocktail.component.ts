import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../enteties/cocktail';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent {
  private readonly NOT_SET = 'not-set';

  @Input() cocktail: Cocktail = {
    description: this.NOT_SET,
    name: this.NOT_SET,
  };

  @Output() favorized = new EventEmitter<void>()
  @Output() added = new EventEmitter<void>()

  public onFavorized() {
    this.favorized.emit()
  }

  public onAdded() {
    this.added.emit()
  }
}
