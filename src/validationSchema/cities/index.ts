import * as yup from 'yup';

export const cityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  history: yup.string().nullable(),
  danger_level: yup.number().integer().nullable(),
  internet_coverage: yup.number().integer().nullable(),
  taxi_availability: yup.number().integer().nullable(),
  hotel_count: yup.number().integer().nullable(),
});
