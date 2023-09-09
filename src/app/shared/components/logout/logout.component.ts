import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '@facades';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  private readonly _userService = inject(UserService);

  public logout(): void {
    this._userService.logout()
  }
}
