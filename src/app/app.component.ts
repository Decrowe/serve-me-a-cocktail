import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CombineService } from './combine.service';
import { HeaderComponent } from '@features';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly _combiner = inject(CombineService);
}
