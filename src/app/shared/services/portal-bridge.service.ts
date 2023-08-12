import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal'

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {

  private readonly _headerPortalLeft = new BehaviorSubject<TemplatePortal | undefined>(undefined);
  private readonly _headerPortalRight = new BehaviorSubject<TemplatePortal | undefined>(undefined);
  private readonly _footerPortal = new BehaviorSubject<TemplatePortal | undefined>(undefined);
  
  public readonly headerPortalLeft$ = this._headerPortalLeft.asObservable();
  public readonly headerPortalRight$ = this._headerPortalRight.asObservable();
  public readonly footerPortal$ = this._footerPortal.asObservable();

  public setHeaderPortalLeft(portal: TemplatePortal) {
    this._headerPortalLeft.next(portal);
  }
  public setHeaderPortalRight(portal: TemplatePortal) {
    this._headerPortalRight.next(portal);
  }
  
  public setFooterPortal(portal: TemplatePortal) {
    this._footerPortal.next(portal);
  }
}
