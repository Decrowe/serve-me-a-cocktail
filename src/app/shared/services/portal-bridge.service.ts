import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal'

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {

  private readonly _headerPortal = new BehaviorSubject<TemplatePortal | undefined>(undefined);
  public readonly headerPortal$ = this._headerPortal.asObservable();

  public setHeaderPortal(portal: TemplatePortal) {
    this._headerPortal.next(portal);
  }

  private readonly _footerPortal = new BehaviorSubject<TemplatePortal | undefined>(undefined);
  public readonly footerPortal$ = this._footerPortal.asObservable();

  public setFooterPortal(portal: TemplatePortal) {
    this._footerPortal.next(portal);
  }
}
