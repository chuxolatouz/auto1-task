import * as faker from 'faker';
import { colors } from './colors';
import { manufacturers } from './manufacturers';

export const cars = [];

for (var i = 0; i < 1000; i++) {
  const stockNumber = i;
  const manufacturer= faker.random.arrayElement(manufacturers);
  const model = faker.random.arrayElement(manufacturer.models);
  const color = faker.random.arrayElement(colors);
  const mileageNumber = faker.random.number();
  const fuelType = faker.random.arrayElement(['Petrol', 'Diesel']);

  cars.push({
    stockNumber,
    manufacturerName: manufacturer.name,
    modelName: model.name,
    color,
    mileage: {
      number: mileageNumber,
      unit: 'km'
    },
    fuelType,
    pictureUrl: '/images/car.svg'
  });
}
