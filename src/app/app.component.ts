import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, ScaffoldAppComponent } from '@components';
import { CombineService } from '@services';

@Component({
  standalone: true,
  imports: [RouterModule, ScaffoldAppComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly _combiner = inject(CombineService);

}
