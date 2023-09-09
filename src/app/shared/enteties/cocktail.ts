import { NIL as NIL_uuid } from "uuid";

export interface Cocktail {
    id: string;
    name: string;
    ingredients: Array<string>;
    description: string;
}

export const DEFAULT_COCKTAIL : Cocktail = {
    id: NIL_uuid,
    name: "default-name",
    description: "default-description",
    ingredients: [],
}