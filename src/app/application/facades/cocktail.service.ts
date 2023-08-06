import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { Cocktail } from 'src/app/shared/enteties/cocktail';
import { CocktailDataService } from 'src/app/infrastructure/cocktail.data.service';
import { CockatilSource, CocktailSources } from '@enteties';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly _cocktailDataService = inject(CocktailDataService)

  private readonly _cocktails = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly cocktails$ = this._cocktails.asObservable();

  private readonly _favorites = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly favorites$ = this._favorites.asObservable();

  private readonly _cocktailSource = new BehaviorSubject<CockatilSource>('All')
  public readonly cocktailSource$ = this._cocktailSource.asObservable()

  public setCocktailSource(source : CockatilSource): void {
    this._cocktailSource.next(source);
    switch (source) {
      case CocktailSources.favorites:
          this._cocktails.next(this._favorites.value)
        break;
      default:
        this.updateCocktails()
        break;
    }
  }

  public updateCocktails(): void {
    this._cocktailDataService
      .getCocktails()
      .pipe(first())
      .subscribe((cocktails) => this._cocktails.next(cocktails));
  }

  public isFavorized(cocktail: Cocktail): boolean {
    return this._favorites.value.includes(cocktail);
  }

  public addCocktailToFavorites(cocktail: Cocktail): void {
    if (this._favorites.value.includes(cocktail)) return;
    this._favorites.next([...this._favorites.value, cocktail]);
  }

  public removeCocktailFromFavorites(cocktail: Cocktail) {
    const favorites = this._favorites.value;
    const index = favorites.indexOf(cocktail);
    favorites.splice(index,1);
    this._favorites.next(favorites);
  }
  
}
