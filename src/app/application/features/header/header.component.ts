import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../facades/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly _userService = inject(UserService);

  public readonly userLoggedIn$ = this._userService.user$;

  public logout(): void {
    this._userService.logout()
  }
}

