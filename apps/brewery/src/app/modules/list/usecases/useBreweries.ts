import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { HttpResError } from '../../../shared/types/httpTypes';
import { useBreweryListService } from '../services/breweryService';
import { BreweriesRequest, BreweriesResponse } from '../dto/breweryDTO';

export const useBreweries = (params: BreweriesRequest) => {
  const getBreweryList = useBreweryListService();
  return useQuery(['Breweries', params], async () => {
    const res = await getBreweryList(params);
    if (res) {
      return res;
    }
  });
};
