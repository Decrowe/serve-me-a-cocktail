import { Injectable, inject, isDevMode } from '@angular/core';
import { Observable, map, of,tap } from 'rxjs';
import { Cocktail } from '../shared/enteties/cocktail';
import { GetMockCocktails } from '../shared/mocks/cocktails';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CocktailDataService {
  private readonly _htttp = inject(HttpClient);

  public getCocktails(): Observable<Array<Cocktail>> {
    return isDevMode()
      ? of(GetMockCocktails())
      : this._htttp
          .get('http://localhost:3000/cocktails') as Observable<Array<Cocktail>>
  }
}
