import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APP_ROUTES, NavigationService, OrderService } from '@facades';
import { OrderComponent } from '@components';
import { Order } from '@enteties';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    OrderComponent,
    PortalModule,
  ],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit, OnDestroy {
  private readonly _orderService = inject(OrderService);
  private readonly _navi = inject(NavigationService);

  public readonly orders$ = this._orderService.orders$;

  @ViewChild(CdkPortal)
  footerPortalContent!: CdkPortal;

  ngOnInit(): void {
    this._orderService.updateOrders();
  }

  ngOnDestroy(): void {
    this.footerPortalContent.detach();
  }

  public onOrderRejected(order: Order) {
    this._orderService.orderDone(order);
  }

  public onOrderDone(order: Order) {
    this._orderService.orderRejected(order);
  }

  public onEditCocktails() {
    this._navi.navigate(APP_ROUTES.cocktailsEdit);
  }
}
