import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCity } from 'apiSdk/cities';
import { cityValidationSchema } from 'validationSchema/cities';
import { CityInterface } from 'interfaces/city';

function CityCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CityInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCity(values);
      resetForm();
      router.push('/cities');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CityInterface>({
    initialValues: {
      name: '',
      history: '',
      danger_level: 0,
      internet_coverage: 0,
      taxi_availability: 0,
      hotel_count: 0,
    },
    validationSchema: cityValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Cities',
              link: '/cities',
            },
            {
              label: 'Create City',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create City
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.history}
            label={'History'}
            props={{
              name: 'history',
              placeholder: 'History',
              value: formik.values?.history,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Danger Level"
            formControlProps={{
              id: 'danger_level',
              isInvalid: !!formik.errors?.danger_level,
            }}
            name="danger_level"
            error={formik.errors?.danger_level}
            value={formik.values?.danger_level}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('danger_level', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Internet Coverage"
            formControlProps={{
              id: 'internet_coverage',
              isInvalid: !!formik.errors?.internet_coverage,
            }}
            name="internet_coverage"
            error={formik.errors?.internet_coverage}
            value={formik.values?.internet_coverage}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('internet_coverage', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Taxi Availability"
            formControlProps={{
              id: 'taxi_availability',
              isInvalid: !!formik.errors?.taxi_availability,
            }}
            name="taxi_availability"
            error={formik.errors?.taxi_availability}
            value={formik.values?.taxi_availability}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('taxi_availability', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Hotel Count"
            formControlProps={{
              id: 'hotel_count',
              isInvalid: !!formik.errors?.hotel_count,
            }}
            name="hotel_count"
            error={formik.errors?.hotel_count}
            value={formik.values?.hotel_count}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('hotel_count', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/cities')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'city',
    operation: AccessOperationEnum.CREATE,
  }),
)(CityCreatePage);
