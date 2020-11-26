import DataApiService from './data-api.service';

const delayInMs = 1800;

export interface City {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

const api = new DataApiService<City>('/api/cities', delayInMs);

export default api;
