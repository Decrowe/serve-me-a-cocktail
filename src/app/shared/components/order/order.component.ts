import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEFAULT_ORDER, Order } from '@enteties';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './order.component.html',
})
export class OrderComponent {
  @Input() order: Order = DEFAULT_ORDER;
  @Output() done = new EventEmitter<void>();
  @Output() rejected = new EventEmitter<void>();

  public onRejected(): void {
      this.rejected.emit()
    }
  public onDone(): void {
    this.done.emit()
  }
}
