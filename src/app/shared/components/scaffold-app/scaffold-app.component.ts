import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-scaffold-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scaffold-app.component.html',
})
export class ScaffoldAppComponent {

}
