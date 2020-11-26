import DataApiService from './data-api.service';

export interface Hero {
  id: number;
  name: string;
  secretIdentity: string;
  universe: string;
}

const api = new DataApiService<Hero>(`/api/heroes`, 1800);

export default api;
