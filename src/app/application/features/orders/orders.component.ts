import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APP_ROUTES, NavigationService, OrderService } from '@facades';
import { Order } from '@enteties';
import { OrderComponent } from '@components';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    OrderComponent
  ],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  private readonly _orderService = inject(OrderService);
  private readonly _navi = inject(NavigationService);

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
