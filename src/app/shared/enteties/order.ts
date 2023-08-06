import { Cocktail } from "./cocktail";
import { User } from "./user";


export interface Order {
    cocktail: Cocktail,
    user: User,
    note?: string,
}