import styled from 'styled-components'

const StyledContentSecondaryTitle = styled.h3`
  color: #3c4242;
  font-family: 'Core Sans C', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.56px;
`

const ContentSecondaryTitle = ({ children }) => {
  return <StyledContentSecondaryTitle>{children}</StyledContentSecondaryTitle>
}

export default ContentSecondaryTitle
