import { CityInterface } from 'interfaces/city';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PersonInterface {
  id?: string;
  name: string;
  role?: string;
  bio?: string;
  city_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  city?: CityInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PersonGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  role?: string;
  bio?: string;
  city_id?: string;
  user_id?: string;
}
