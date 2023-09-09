import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogoutComponent, ScaffoldContentComponent } from '@components';

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
export class GuestComponent {}
