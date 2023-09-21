import axios from 'axios';
import queryString from 'query-string';
import { PersonInterface, PersonGetQueryInterface } from 'interfaces/person';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPeople = async (query?: PersonGetQueryInterface): Promise<PaginatedInterface<PersonInterface>> => {
  const response = await axios.get('/api/people', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPerson = async (person: PersonInterface) => {
  const response = await axios.post('/api/people', person);
  return response.data;
};

export const updatePersonById = async (id: string, person: PersonInterface) => {
  const response = await axios.put(`/api/people/${id}`, person);
  return response.data;
};

export const getPersonById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/people/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePersonById = async (id: string) => {
  const response = await axios.delete(`/api/people/${id}`);
  return response.data;
};
