import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OrderService } from '@facades';
import { OrderComponent } from '@components';
import { Order } from '@enteties';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    OrderComponent,
  ],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  private readonly _orderService = inject(OrderService);

  public readonly orders$ = this._orderService.orders$;

  ngOnInit(): void {
    this._orderService.updateOrders();
  }

  public onOrderRejected(order: Order) {
    this._orderService.orderDone(order);
  }
  
  public onOrderDone(order: Order) {
    this._orderService.orderRejected(order);
  }
}
