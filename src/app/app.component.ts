import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent, AppFooterComponent } from './application';

@Component({
  standalone: true,
  imports: [RouterModule, AppHeaderComponent, AppFooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '.-serve-me-a-cocktail';
}
