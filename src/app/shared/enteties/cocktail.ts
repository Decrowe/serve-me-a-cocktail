export interface Cocktail {
    name: string;
    description: string;
    ingredients: Array<string>;
}

export const DEFAULT_COCKTAIL : Cocktail = {
    name: "default-name",
    description: "default-description",
    ingredients: [],
}