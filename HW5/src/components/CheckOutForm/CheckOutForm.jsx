import { Formik, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { actionClearShoppingCart } from '../../store/actions'
import { selectShoppingCartItems } from '../../store/selectors'
import Input from './Input/'
import Button from '../Button/'
import ContentSecondaryTitle from '../Content/ContentSecondaryTitle'
import MaskedInput from './MaskedInput/MaskedInput'
import { validationSchema } from './validations'
import {
  StyledCheckOutFormContainer,
  StyledFirstFormSection,
  StyledMiddleFormSection,
  StyledLastFormSection,
  StyledButtonBox,
} from './CheckOutFormStyles'

const CheckOutForm = () => {
  const dispatch = useDispatch()
  const shoppingCartItems = useSelector(selectShoppingCartItems)

  const sendData = (value) => {
    console.log('Checkout user info:', value)
    console.log('Checkout products:', shoppingCartItems)
    dispatch(actionClearShoppingCart())
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        countryRegion: '',
        companyName: '',
        streetAddress: '',
        age: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
      }}
      onSubmit={(value) => sendData(value)}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <StyledCheckOutFormContainer>
          <Form>
            <ContentSecondaryTitle>Billing Details</ContentSecondaryTitle>
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
                label="Company Name*"
                placeholder="Company"
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
                name="age"
                label="Age*"
                placeholder="Your age"
                error={errors.age && touched.age}
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
              <MaskedInput
                type="text"
                name="phone"
                label="Phone*"
                error={errors.phone && touched.phone ? errors.phone : undefined}
              />

              <StyledButtonBox>
                <Button type="submit" $buttonType="primaryButton" $size="m">
                  Continue to delivery
                </Button>
              </StyledButtonBox>
              <label>
                <input type="checkbox" /> Save my information for a faster
                checkout
              </label>
            </StyledLastFormSection>
          </Form>
        </StyledCheckOutFormContainer>
      )}
    </Formik>
  )
}

export default CheckOutForm
