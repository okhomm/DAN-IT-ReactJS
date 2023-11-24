import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './Input/'
import Button from '../Button/'
import styled from 'styled-components'

const StyledFirstFormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;
`

const StyledMiddleFormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledLastFormSection = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckOutForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        countryRegion: '',
        companyName: '',
        streetAddress: '',
        aptSuiteUnit: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
      }}
      onSubmit={(values) => console.log(JSON.stringify(values))}
    >
      {({ errors, touched }) => (
        <Form>
          <StyledFirstFormSection>
            <Input
              type="text"
              name="firstName"
              label="First Name*"
              placeholder="First Name"
              error={errors.firstName && touched.firstName}
            />
            <Input
              type="text"
              name="lastName"
              label="Last Name*"
              placeholder="Last Name"
              error={errors.lastName && touched.lastName}
            />
            <Input
              type="text"
              name="countryRegion"
              label="Country / Region*"
              placeholder="Country / Region"
              error={errors.countryRegion && touched.countryRegion}
            />
            <Input
              type="text"
              name="companyName"
              label="Company Name"
              placeholder="Company (optional)"
              error={errors.companyName && touched.companyName}
            />
            <Input
              type="text"
              name="streetAddress"
              label="Street Address*"
              placeholder="House number and street name"
              error={errors.streetAddress && touched.streetAddress}
            />
            <Input
              type="text"
              name="aptSuiteUnit"
              label="Apt, suite, unit"
              placeholder="apartment, suite, unit, etc. (optional)"
              error={errors.aptSuiteUnit && touched.aptSuiteUnit}
            />
          </StyledFirstFormSection>
          <StyledMiddleFormSection>
            <Input
              type="text"
              name="city"
              label="City*"
              placeholder="Town / City"
              error={errors.city && touched.city}
            />
            <Input
              type="text"
              name="state"
              label="State*"
              placeholder="State"
              error={errors.state && touched.state}
            />
            <Input
              type="text"
              name="postalCode"
              label="Postal Code*"
              placeholder="Postal Code"
              error={errors.postalCode && touched.postalCode}
            />
          </StyledMiddleFormSection>
          <StyledLastFormSection>
            <Input
              type="text"
              name="phone"
              label="Phone*"
              placeholder="Phone"
              error={errors.phone && touched.phone}
            />
            <Button>Continue to delivery</Button>
            <label>
              <input type="checkbox" /> Save my information for a faster
              checkout
            </label>
          </StyledLastFormSection>
        </Form>
      )}
    </Formik>
  )
}

export default CheckOutForm
