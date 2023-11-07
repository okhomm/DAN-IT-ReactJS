import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 1440px;
  background-color: ${({ theme }) => theme.colorStyles.title};
`