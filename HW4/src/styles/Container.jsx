import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1240px;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
