import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { Cocktail } from 'src/app/shared/enteties/cocktail';
import { CocktailDataService } from 'src/app/infrastructure/cocktail.data.service';
import { CockatilSource } from '@enteties';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly _cocktailDataService = inject(CocktailDataService)

  private readonly _cocktails = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly cocktails$ = this._cocktails.asObservable();

  private readonly _cocktailSource = new BehaviorSubject<CockatilSource>('All')
  public readonly cocktailSource$ = this._cocktailSource.asObservable()


  public updateCocktails(): void {
    this._cocktailDataService
      .getCocktails()
      .pipe(first())
      .subscribe((cocktails) => this._cocktails.next(cocktails));
  }
  public setCocktailSource(source : CockatilSource): void {
    this._cocktailSource.next(source);
  }

  public setCocktails(cocktails?: Array<Cocktail>): void {
    cocktails? this._cocktails.next(cocktails) : this.updateCocktails()
  }
  
  
}
