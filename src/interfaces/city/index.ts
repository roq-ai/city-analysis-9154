import { CrimeOrganisationInterface } from 'interfaces/crime-organisation';
import { LocalAuthorityInterface } from 'interfaces/local-authority';
import { PersonInterface } from 'interfaces/person';
import { GetQueryInterface } from 'interfaces';

export interface CityInterface {
  id?: string;
  name: string;
  history?: string;
  danger_level?: number;
  internet_coverage?: number;
  taxi_availability?: number;
  hotel_count?: number;
  created_at?: any;
  updated_at?: any;
  crime_organisation?: CrimeOrganisationInterface[];
  local_authority?: LocalAuthorityInterface[];
  person?: PersonInterface[];

  _count?: {
    crime_organisation?: number;
    local_authority?: number;
    person?: number;
  };
}

export interface CityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  history?: string;
}
