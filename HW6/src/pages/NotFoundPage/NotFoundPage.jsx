import Button from '../../components/Button'
import {
  StyledNotFoundPage,
  StyledErrorText,
  Styled404Text,
  StyledButtonLink,
} from './NotFoundPageStyles'

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledErrorText>Page not found</StyledErrorText>
      <Styled404Text>404</Styled404Text>
      <StyledButtonLink to="/">
        <Button $buttonType="primaryButton" $size="l">
          Home
        </Button>
      </StyledButtonLink>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage
