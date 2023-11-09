import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import Facebook from '../../../assets/svg/social-buttons/facebook.svg?react'
import Instagram from '../../../assets/svg/social-buttons/instagram.svg?react'
import Twitter from '../../../assets/svg/social-buttons/twitter.svg?react'
import Linkedin from '../../../assets/svg/social-buttons/linkedin.svg?react'

const StyledSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
`

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <Button $buttonType="socialButton" $size="xs">
        <Facebook />
      </Button>
      <Button $buttonType="socialButton" $size="xs">
        <Instagram />
      </Button>
      <Button $buttonType="socialButton" $size="xs">
        <Twitter />
      </Button>
      <Button $buttonType="socialButton" $size="xs">
        <Linkedin />
      </Button>
    </StyledSocialIcons>
  )
}

export default SocialIcons
