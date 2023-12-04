import * as yup from 'yup'

export const validationSchema = yup.object({
  firstName: yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Cannot have numeric values')
    .required('First name is required')
    .min(2, 'Too short First name')
    .max(60, 'Too long First name'),
  lastName: yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Cannot have numeric values')
    .required('Last name is required')
    .min(2, 'Too short Last name')
    .max(60, 'Too long Last name'),
  countryRegion: yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Cannot have numeric values')
    .required('Country/Region is required')
    .min(5, 'Too short Country/Region')
    .max(30, 'Too long Country/Region'),
  companyName: yup.string()
    .required('Company name is required')
    .min(2, 'Too short Company name')
    .max(60, 'Too long Company name'),
  streetAddress: yup.string()
    .required('Street address is required')
    .min(5, 'Too short Street address')
    .max(40, 'Too long Street address'),
  age: yup.number()
    .typeError('Age must be a number')
    .required('Age is required')
    .integer('Age must be an integer')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be at most 120'),
  city: yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Cannot have numeric values')
    .required('City is required')
    .min(2, 'Too short City')
    .max(60, 'Too long City'),
  state: yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Cannot have numeric values')
    .required('State is required')
    .min(2, 'Too short State')
    .max(60, 'Too long State'),
  postalCode: yup.number()
    .typeError('Postal code must be a number')
    .integer('Postal code must be an integer')
    .required('Postal code is required')
    .min(10000, 'Postal code must be at least 5')
    .max(99999, 'Postal code must be at most 999999'),
  phone: yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
})