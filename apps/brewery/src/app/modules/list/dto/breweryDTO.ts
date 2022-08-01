import { HttpResSuccess } from '../../../shared/types/httpTypes';

export type BreweriesRequest = {
  per_page?: number;
  query?: string;
};

export type BreweriesResponse = Array<Brewery>;

export type BreweryRequest = {
  obdb_id: string;
};

export type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: number;
  country: string;
  longitude: number;
  latitude: number;
  phone: number;
  website_url: string;
  updated_at: string;
  created_at: string;
};

export type BreweryResponse = Brewery;
