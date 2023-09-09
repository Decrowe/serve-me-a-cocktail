import { faker } from '@faker-js/faker';

export const GetMockCocktails = (count = 10) =>{ return new Array(count).fill(0).map(() => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    ingredients: [faker.animal.cat(), faker.animal.insect()],
  };
});
}