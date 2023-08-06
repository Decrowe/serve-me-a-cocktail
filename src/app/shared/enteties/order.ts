import { Cocktail, DEFAULT_COCKTAIL } from "./cocktail";
import { DEFAULT_USER, User } from "./user";


export interface Order {
    cocktail: Cocktail,
    user: User,
    note?: string,
}

export const DEFAULT_ORDER : Order = {
    cocktail: DEFAULT_COCKTAIL,
    user: DEFAULT_USER,
    note: "default-note",
}