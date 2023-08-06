import { Cocktail } from '../enteties/cocktail';
import { Order } from '../enteties/order';
import { Roles } from '../enteties/role';
import { MOCK_COCKTAILS } from './cocktails';

export const MOCK_ORDERS: Array<Order> = Array(5)
  .fill(0)
  .map((element, index) => {
    return {
      cocktail: {
        name: MOCK_COCKTAILS[index % 3].name,
        description: MOCK_COCKTAILS[index % 3].description,
      } as Cocktail,
      user: { name: 'Lukas', role: Roles.customer },
    } as Order;
  });
