import axios from 'axios';
import queryString from 'query-string';
import { CityInterface, CityGetQueryInterface } from 'interfaces/city';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCities = async (query?: CityGetQueryInterface): Promise<PaginatedInterface<CityInterface>> => {
  const response = await axios.get('/api/cities', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCity = async (city: CityInterface) => {
  const response = await axios.post('/api/cities', city);
  return response.data;
};

export const updateCityById = async (id: string, city: CityInterface) => {
  const response = await axios.put(`/api/cities/${id}`, city);
  return response.data;
};

export const getCityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCityById = async (id: string) => {
  const response = await axios.delete(`/api/cities/${id}`);
  return response.data;
};
