import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { HttpResError } from '../../../shared/types/httpTypes';
import { useBreweryListService } from '../services/breweryService';
import { BreweriesRequest, BreweriesResponse } from '../dto/breweryDTO';

export const useBreweries = () => {
  const getBreweryList = useBreweryListService();
  return useQuery(['Breweries'], async () => {
    const res = await getBreweryList();
    if (res) {
      return res;
    }
  });
};
