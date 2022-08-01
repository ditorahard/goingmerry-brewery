import { Brewery } from "../dto/breweryDTO";

export class BreweryEntity {
  values: Brewery;

  constructor(values: Brewery) {
    this.values = values;
  }
}
