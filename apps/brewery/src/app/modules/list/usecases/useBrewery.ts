import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { HttpResError } from '../../../shared/types/httpTypes';
import { useBreweryService } from '../services/breweryService';
import { BreweryEntity } from '../entities/BreweryEntity';
import { BreweryRequest, Brewery } from '../dto/breweryDTO';
import { AxiosResponse } from 'axios';

export const useBrewery = (
  params: BreweryRequest,
  options?: UseQueryOptions<BreweryEntity | undefined, HttpResError>
) => {
  const getBrewery = useBreweryService();
  console.log('params', params);

  return useQuery<AxiosResponse<Brewery>>(
    ['Brewery', params.obdb_id],
    async () => {
      const res = await getBrewery(params);
      if (res) {
        console.log('useQuery res', res);
        return res;
      }
    }
  );
};
