import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../../enteties/cocktail';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ButtonComponent],
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent {
  private readonly NOT_SET = 'not-set';
  @Input() imgSrc : string | undefined = undefined ;
  @Input() cocktail: Cocktail = {
    id: this.NOT_SET,
    name: this.NOT_SET,
    description: this.NOT_SET,
    ingredients: []
  };
}
