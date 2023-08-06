import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { Cocktail } from 'src/app/shared/enteties/cocktail';
import { CocktailDataService } from 'src/app/infrastructure/cocktail.data.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly _cocktailDataService = inject(CocktailDataService)

  private readonly _cocktails = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly cocktails$ = this._cocktails.asObservable();

  public updateCocktails(): void {
    this._cocktailDataService
      .getCocktails()
      .pipe(first())
      .subscribe((cocktails) => this._cocktails.next(cocktails));
  }
  
}
