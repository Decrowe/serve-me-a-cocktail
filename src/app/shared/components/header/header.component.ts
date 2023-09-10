import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
import { UserService } from '@facades';
import { SidenavService } from '@services';
import { User } from '../../enteties/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoutComponent],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  private readonly _userService = inject(UserService)
  private readonly _sidenavService = inject(SidenavService);

  public toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
  }

  public readonly userName$ = this._userService.user$.pipe(map((user: User | undefined) => user?.name))
  public readonly userRole$ = this._userService.user$.pipe(map((user: User | undefined) => user?.role))
  public readonly isLoggedIn$ = this._userService.user$
}
