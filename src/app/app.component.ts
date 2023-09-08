import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScaffoldComponent } from '@components';
import { CombineService } from '@services';

@Component({
  standalone: true,
  imports: [RouterModule, ScaffoldComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly _combiner = inject(CombineService);

}
