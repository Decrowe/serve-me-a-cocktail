import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cocktail } from '../shared/enteties/cocktail';
import { MOCK_COCKTAILS } from '../shared/mocks/cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {

  public getCocktails(): Observable<Array<Cocktail>> {
    return of(MOCK_COCKTAILS)
  }

}
