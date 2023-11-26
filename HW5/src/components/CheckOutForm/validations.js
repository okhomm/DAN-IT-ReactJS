import * as yup from 'yup'

export const validationSchema = yup.object({
  firstName: yup
    .string('Enter your First name')
    .required('First name is required')
    .min(2, 'Too short First name')
    .max(60, 'Too long First name'),
  lastName: yup
    .string('Enter your Last name')
    .required('Last name is required')
    .min(2, 'Too short Last name')
    .max(60, 'Too long Last name'),
  countryRegion: yup
    .string('Enter your Country/Region')
    .required('Country/Region is required')
    .min(5, 'Too short Country/Region')
    .max(30, 'Too long Country/Region'),
  companyName: yup
    .string('Enter your Company name')
    .required('Company name is required')
    .min(2, 'Too short Company name')
    .max(60, 'Too long Company name'),
  streetAddress: yup
    .string('Enter your Street address')
    .required('Street address is required')
    .min(5, 'Too short Street address')
    .max(40, 'Too long Street address'),
  age: yup
    .number('Enter your Age')
    .typeError('Age must be a number')
    .required('Age is required')
    .integer('Age must be an integer')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be at most 120'),
  city: yup
    .string('Enter your City')
    .required('City is required')
    .min(2, 'Too short City')
    .max(60, 'Too long City'),
  state: yup
    .string('Enter your State')
    .required('State is required')
    .min(2, 'Too short State')
    .max(60, 'Too long State'),
  postalCode: yup
    .number('Enter your Postal code')
    .typeError('Postal code must be a number')
    .integer('Postal code must be an integer')
    .required('Postal code is required')
    .min(10000, 'Postal code must be at least 5')
    .max(99999, 'Postal code must be at most 999999'),
  phone: yup
    .string('Enter your Phone')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
})