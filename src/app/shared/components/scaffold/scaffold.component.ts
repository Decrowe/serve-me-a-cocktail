import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-scaffold',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './scaffold.component.html',
})
export class ScaffoldComponent {
}
