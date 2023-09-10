import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogoutComponent, ScaffoldContentComponent } from '@components';
import { FeatureChildRoutes } from 'src/app/shared/enteties/feature-routes';
import { APP_ROUTES, NavigationService, appRoute } from '../../facades/navigation.service';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [
    CommonModule,
    ScaffoldContentComponent,
    RouterOutlet,
    LogoutComponent,
  ],
  templateUrl: './guest.component.html',
  styles: [],
})
export class GuestComponent {
  private readonly _navigationService = inject(NavigationService);

  public readonly guestRoutes: FeatureChildRoutes = [
    {label: 'Cocktails', path: APP_ROUTES.guestCocktails},
  ];



  public navigate(path: appRoute): void {
    this._navigationService.navigate(path)
  }
}
