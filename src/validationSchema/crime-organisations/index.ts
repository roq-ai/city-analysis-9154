import * as yup from 'yup';

export const crimeOrganisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  city_id: yup.string().nullable().required(),
});
