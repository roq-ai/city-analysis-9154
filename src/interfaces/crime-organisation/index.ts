import { CityInterface } from 'interfaces/city';
import { GetQueryInterface } from 'interfaces';

export interface CrimeOrganisationInterface {
  id?: string;
  name: string;
  description?: string;
  city_id: string;
  created_at?: any;
  updated_at?: any;

  city?: CityInterface;
  _count?: {};
}

export interface CrimeOrganisationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  city_id?: string;
}
