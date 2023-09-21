import axios from 'axios';
import queryString from 'query-string';
import { CrimeOrganisationInterface, CrimeOrganisationGetQueryInterface } from 'interfaces/crime-organisation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCrimeOrganisations = async (
  query?: CrimeOrganisationGetQueryInterface,
): Promise<PaginatedInterface<CrimeOrganisationInterface>> => {
  const response = await axios.get('/api/crime-organisations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCrimeOrganisation = async (crimeOrganisation: CrimeOrganisationInterface) => {
  const response = await axios.post('/api/crime-organisations', crimeOrganisation);
  return response.data;
};

export const updateCrimeOrganisationById = async (id: string, crimeOrganisation: CrimeOrganisationInterface) => {
  const response = await axios.put(`/api/crime-organisations/${id}`, crimeOrganisation);
  return response.data;
};

export const getCrimeOrganisationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/crime-organisations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCrimeOrganisationById = async (id: string) => {
  const response = await axios.delete(`/api/crime-organisations/${id}`);
  return response.data;
};
