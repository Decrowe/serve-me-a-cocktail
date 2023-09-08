import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input() label = 'no-label-set';
  @Output() clicked = new EventEmitter<void>()
   
  public onClick():void {
    this.clicked.emit()
  }
}
