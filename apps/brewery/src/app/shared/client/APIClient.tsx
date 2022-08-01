import Axios, { AxiosInstance } from 'axios';

export type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

export interface IApiClient {
  post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    config?: RequestConfig
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    path: string,
    object: TRequest
  ): Promise<TResponse>;
  put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  get<TRequest, TResponse>(data: any): Promise<TResponse>;
}

const BASE_URL = 'https://api.openbrewerydb.org';

export default class ApiClient implements IApiClient {
  private client: AxiosInstance;

  protected createAxiosClient(): AxiosInstance {
    return Axios.create({
      baseURL: BASE_URL,
      responseType: 'json' as const,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10 * 1000,
    });
  }

  constructor() {
    this.client = this.createAxiosClient();
  }

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: RequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.post<TResponse>(path, payload, config)
        : await this.client.post<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }

  async patch<TRequest, TResponse>(
    path: string,
    payload: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.patch<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(
    path: string,
    payload: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }

  async get<TRequest, TResponse>(data: any): Promise<TResponse> {
    try {
      const { path, params } = data;
      console.log('get data', data);
      const response = await this.client.get<TResponse>(path, { params });
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
}
