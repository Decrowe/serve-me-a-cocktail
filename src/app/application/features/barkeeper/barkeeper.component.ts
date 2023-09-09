import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent, ScaffoldContentComponent } from '@components';
import { OrdersComponent } from '../orders/orders.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barkeeper',
  standalone: true,
  imports: [
    CommonModule,
    ScaffoldContentComponent,
    OrdersComponent,
    RouterOutlet,
    LogoutComponent,
  ],
  templateUrl: './barkeeper.component.html',
  styles: [],
})
export class BarkeeperComponent {}
