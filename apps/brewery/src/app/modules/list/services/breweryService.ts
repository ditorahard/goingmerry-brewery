import { BreweryRequest, BreweriesRequest } from '../dto/breweryDTO';
import ApiClient from '../../../shared/client/APIClient';

const API = new ApiClient();

export const useBreweryService = () => {
  return (data: BreweryRequest) => {
    const { obdb_id } = data;
    return API.get({
      path: `/breweries/${obdb_id}`,
      params: null,
    }).then((res) => res);
  };
};

export const useBreweryListService = () => {
  return (data: BreweriesRequest) => {
    return API.get({ path: `/breweries`, params: data }).then((res) => res);
  };
};

export const useBrewerySearchService = () => {
  return (data: BreweriesRequest) => {
    return API.get({ path: `/breweries/search`, params: data }).then(
      (res) => res
    );
  };
};
