import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private readonly _isSidenavToggled = new BehaviorSubject<boolean>(false)
  public readonly isSidenavToggled$ = this._isSidenavToggled.asObservable()

  public toggleSidenav(): void {
    this._isSidenavToggled.next(!this._isSidenavToggled.value)
  }
}
