import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from 'src/app/shared/enteties';
import { CartService, CocktailService, UserService } from '@facades';
import { CocktailComponent } from '@components';
import { Subject } from 'rxjs';
import { TriggerCocktailListComponent } from '../trigger-cocktail-list/trigger-cocktail-list.component';
import { TriggerFavoritesListComponent } from '../trigger-favorite-list/trigger-favorite-list.component';
import { CartComponent } from '../cart/cart.component';
import { CdkPortal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { PortalBridgeService } from '@services';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CocktailComponent,
    TriggerCocktailListComponent,
    TriggerFavoritesListComponent,
    CartComponent,
    PortalModule,
  ],
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly _cocktailService = inject(CocktailService);
  private readonly _cartService = inject(CartService);
  private readonly _userService = inject(UserService);
  private readonly _portalBridge = inject(PortalBridgeService);
  private readonly _viewContainerRef = inject(ViewContainerRef);

  private readonly _destroyed = new Subject<void>();

  public readonly cocktails$ = this._cocktailService.cocktails$;
  public readonly cocktailSource$ = this._cocktailService.cocktailSource$;

  @ViewChild(CdkPortal)
  footerPortalContent!: CdkPortal;

  ngOnInit(): void {
    this._cocktailService.updateCocktails();
  }
  ngAfterViewInit(): void {
    this._portalBridge.setFooterPortal(this.footerPortalContent);
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();

    this.footerPortalContent.detach();
  }

  public addCocktailToCart(cocktail: Cocktail): void {
    this._cartService.addCocktailToCart(cocktail);
  }

  public isFavorized(cocktail: Cocktail): boolean {
    return this._userService.isFavorized(cocktail);
  }

  public onFavorizedToggle(cocktail: Cocktail, favorized: boolean): void {
    favorized
      ? this.addToFavorites(cocktail)
      : this.removeFromFavorites(cocktail);
  }

  public addToFavorites(cocktail: Cocktail): void {
    this._userService.addCocktailToFavorites(cocktail);
  }

  public removeFromFavorites(cocktail: Cocktail): void {
    this._userService.deleteCocktailFromFavorites(cocktail);
  }
}
