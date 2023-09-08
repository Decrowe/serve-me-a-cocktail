import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScaffoldComponent } from '@components';
import { CombineService } from '@services';
import { HeaderComponent } from './application/features/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, ScaffoldComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly _combiner = inject(CombineService);

}
