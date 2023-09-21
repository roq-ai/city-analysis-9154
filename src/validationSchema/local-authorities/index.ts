import * as yup from 'yup';

export const localAuthorityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact: yup.string().nullable(),
  city_id: yup.string().nullable().required(),
});
