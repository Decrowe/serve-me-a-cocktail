import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, LogoutComponent, ScaffoldContentComponent } from '@components';
import { OrdersComponent } from '../orders/orders.component';
import { RouterOutlet } from '@angular/router';
import { NavigationService, appRoute } from '../../facades/navigation.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FeatureChildRoutes } from 'src/app/shared/enteties/feature-routes';

@Component({
  selector: 'app-barkeeper',
  standalone: true,
  imports: [
    CommonModule,
    ScaffoldContentComponent,
    OrdersComponent,
    RouterOutlet,
    LogoutComponent,
    ButtonComponent
  ],
  templateUrl: './barkeeper.component.html',
  styles: [],
})
export class BarkeeperComponent {
  private readonly _navigationService = inject(NavigationService);

  public readonly barkeeperRoutes: FeatureChildRoutes = [
    {label: 'Orders', path: 'barkeeper/orders'},
    {label: 'Collection', path: 'barkeeper/collection'},
  ];

  public navigate(path: appRoute): void {
    this._navigationService.navigate(path)
  }
}
