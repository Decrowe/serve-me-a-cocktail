import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../shared/enteties/order';
import { MOCK_ORDERS } from '../shared/mocks/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  orderRejected(order: Order) {
    throw new Error('Method not implemented.');
  }
  orderDone(order: Order) {
    throw new Error('Method not implemented.');
  }

  public getOrders(): Observable<Array<Order>> {
    return of(MOCK_ORDERS)
  }
}
