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
    console.log('data useBrewery', data);
    return API.get<BreweryRequest, Brewery>({
      path: `/breweries/${obdb_id}`,
      params: null,
    }).then((res) => res);
  };
};

export const useBreweryListService = () => {
  return () => {
    return API.get({ path: `/breweries`, params: null }).then((res) => res);
  };
};

export const useBrewerySearchService = () => {
  return (data: BreweriesRequest) => {
    console.log('useBreweryListService', data);
    return API.get({ path: `/breweries/search`, params: data }).then(
      (res) => res
    );
  };
};
