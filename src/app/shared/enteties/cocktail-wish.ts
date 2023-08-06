import { Cocktail } from "./cocktail";

export interface CocktailWish {
    cocktail: Cocktail,
    note?: string,
    uuid: string;
}