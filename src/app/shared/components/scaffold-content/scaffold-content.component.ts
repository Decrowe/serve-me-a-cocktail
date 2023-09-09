import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from '@services';

@Component({
  selector: 'app-scaffold-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scaffold-content.component.html',
  styles: [],
})
export class ScaffoldContentComponent {
  private readonly _sidenavService = inject(SidenavService);
  public readonly isToggled$ = this._sidenavService.isSidenavToggled$;

  public toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
  }
}
