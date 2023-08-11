import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalBridgeService } from '@services';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-scaffold',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './scaffold.component.html',
})
export class ScaffoldComponent {
  private readonly _portalBridge = inject(PortalBridgeService);

  public readonly footerPortal$ = this._portalBridge.footerPortal$;
  public readonly headerPortal$ = this._portalBridge.headerPortal$;
}
