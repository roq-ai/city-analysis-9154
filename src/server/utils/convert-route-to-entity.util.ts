const mapping: Record<string, string> = {
  cities: 'city',
  companies: 'company',
  'crime-organisations': 'crime_organisation',
  'local-authorities': 'local_authority',
  people: 'person',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
