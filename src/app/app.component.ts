import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CocktailService, HeaderComponent, UserService } from './application';
import { Subject, filter, takeUntil } from 'rxjs';
import { Roles } from '@enteties';
import { CocktailDataService } from './infrastructure/cocktail.data.service';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _userService = inject(UserService);
  private readonly _cocktailService = inject(CocktailService);

  private readonly _router = inject(Router);

  private readonly _destroyed = new Subject<void>();

  ngOnInit(): void {
    this.initNavigation();
    this.initFavoriteResetter();
  }

  private initNavigation(): void {
    this._userService.user$
      .pipe(takeUntil(this._destroyed))
      .subscribe((user) => {
        if (user === undefined) this._router.navigateByUrl('login');
        else if (user.role === Roles.guest)
          this._router.navigateByUrl('cocktails');
        else if (user.role === Roles.bartender)
          this._router.navigateByUrl('orders');
      });
  }

  private initFavoriteResetter() {
    this._userService.user$
    .pipe(
      takeUntil(this._destroyed),
      filter((user) => user === undefined)
    )
    .subscribe(() => this._cocktailService.deleteFavorites());
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
