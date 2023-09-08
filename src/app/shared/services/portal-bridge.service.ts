import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Portal} from '@angular/cdk/portal'

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {

  private readonly _headerPortalLeft = new BehaviorSubject<Portal<unknown> | undefined>(undefined);
  private readonly _headerPortalRight = new BehaviorSubject<Portal<unknown> | undefined>(undefined);
  private readonly _footerPortal = new BehaviorSubject<Portal<unknown> | undefined>(undefined);
  
  public readonly headerPortalLeft$ = this._headerPortalLeft.asObservable();
  public readonly headerPortalRight$ = this._headerPortalRight.asObservable();
  public readonly footerPortal$ = this._footerPortal.asObservable();

  public setHeaderPortalLeft(portal: Portal<unknown> | undefined) {
    this._headerPortalLeft.next(portal);
  }
  public setHeaderPortalRight(portal: Portal<unknown> | undefined) {
    this._headerPortalRight.next(portal);
  }
  
  public setFooterPortal(portal: Portal<unknown> | undefined) {
    this._footerPortal.next(portal);
  }
}
