import {
  BreweryRequest,
  BreweriesRequest,
  BreweryResponse,
  BreweriesResponse,
  Brewery,
} from '../dto/breweryDTO';
import ApiClient from '../../../shared/client/APIClient';

const API = new ApiClient();

export const useBreweryService = () => {
  return (data: BreweryRequest) => {
    const { obdb_id } = data;
    return API.get<Brewery>(`/breweries/${obdb_id}`, {}).then((res) => res);
  };
};

export const useBreweryListService = () => {
  return (data: BreweriesRequest) => {
    return API.get<BreweriesResponse>(`/breweries`, data).then((res) => res);
  };
};
