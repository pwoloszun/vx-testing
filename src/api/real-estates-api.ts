import DataApiService from './data-api.service';

export interface RealEstate {
  id: number;
  builtAt: string;
  lat: number;
  lng: number;
  price: number;
  street: string;
  type: string;
}

const api = new DataApiService<RealEstate>(`/api/real-estates`, 1800);

export default api;
