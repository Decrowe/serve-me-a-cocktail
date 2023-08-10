import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';


import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/enteties/user';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _router = inject(Router);

  private readonly _user = new BehaviorSubject<User | undefined>(undefined);
  public readonly user$ = this._user.asObservable();

  public get currentUser() {
    return this._user.getValue();
  }



  public login(user: User): void {
    this._user.next(user);
  }

  public logout(): void {
    this._user.next(undefined);
  }
}
