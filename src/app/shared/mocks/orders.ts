import { Cocktail } from '../enteties/cocktail';
import { Order } from '../enteties/order';
import { Roles } from '../enteties/role';

import { faker } from '@faker-js/faker';


export const MOCK_ORDERS: Array<Order> = Array(5)
  .fill(0)
  .map((element, index) => {
    return {
      cocktail: {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        ingredients: [faker.animal.cat(), faker.animal.insect()]
      } as Cocktail,
      user: { name: 'Lukas', role: Roles.guest },
    } as Order;
  });
