import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './application';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'serve-me-a-cocktail';
}
