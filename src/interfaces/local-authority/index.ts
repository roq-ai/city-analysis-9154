import { CityInterface } from 'interfaces/city';
import { GetQueryInterface } from 'interfaces';

export interface LocalAuthorityInterface {
  id?: string;
  name: string;
  contact?: string;
  city_id: string;
  created_at?: any;
  updated_at?: any;

  city?: CityInterface;
  _count?: {};
}

export interface LocalAuthorityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact?: string;
  city_id?: string;
}
