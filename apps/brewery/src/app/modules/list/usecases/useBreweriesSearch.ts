import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useBrewerySearchService } from '../services/breweryService';
import { BreweriesRequest, BreweriesResponse } from '../dto/breweryDTO';

export const useBreweriesSearch = (params: BreweriesRequest) => {
  const getBrewerySearchList = useBrewerySearchService();
  return useQuery(['BreweriesSearch', params], async () => {
    const res = await getBrewerySearchList(params);
    if (res) {
      return res;
    }
  });
};
