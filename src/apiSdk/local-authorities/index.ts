import axios from 'axios';
import queryString from 'query-string';
import { LocalAuthorityInterface, LocalAuthorityGetQueryInterface } from 'interfaces/local-authority';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLocalAuthorities = async (
  query?: LocalAuthorityGetQueryInterface,
): Promise<PaginatedInterface<LocalAuthorityInterface>> => {
  const response = await axios.get('/api/local-authorities', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLocalAuthority = async (localAuthority: LocalAuthorityInterface) => {
  const response = await axios.post('/api/local-authorities', localAuthority);
  return response.data;
};

export const updateLocalAuthorityById = async (id: string, localAuthority: LocalAuthorityInterface) => {
  const response = await axios.put(`/api/local-authorities/${id}`, localAuthority);
  return response.data;
};

export const getLocalAuthorityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/local-authorities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLocalAuthorityById = async (id: string) => {
  const response = await axios.delete(`/api/local-authorities/${id}`);
  return response.data;
};
