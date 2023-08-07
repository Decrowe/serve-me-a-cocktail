import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent, UserService } from './application';
import { Subject } from 'rxjs';
import { Roles } from '@enteties';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);

  private readonly _destroyed = new Subject<void>();

  ngOnInit(): void {
    this.initNavigation()
  }

  private initNavigation(): void {
    this._userService.user$.subscribe((user) => {
      if (user === undefined) this._router.navigateByUrl("login"); 
      else if (user.role === Roles.guest) this._router.navigateByUrl("cocktails");
      else if (user.role === Roles.bartender) this._router.navigateByUrl("orders");
    });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
