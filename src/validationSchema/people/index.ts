import * as yup from 'yup';

export const personValidationSchema = yup.object().shape({
  name: yup.string().required(),
  role: yup.string().nullable(),
  bio: yup.string().nullable(),
  city_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
