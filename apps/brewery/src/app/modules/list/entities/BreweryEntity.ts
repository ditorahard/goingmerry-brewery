import { Brewery } from '../dto/breweryDTO';

// Was planning to use this but no need
export class BreweryEntity {
  values: Brewery;

  constructor(values: Brewery) {
    this.values = values;
  }
}
