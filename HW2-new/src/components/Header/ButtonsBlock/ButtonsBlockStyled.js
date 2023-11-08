import styled from 'styled-components'

export const StyledButtonsBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
export const FavoriteItemsIndicator = styled.div`
  position: absolute;
  top: -10px;
  right: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: red;
  color: white;
  width: 24px;
  height: 24px;
  font-size:13px;
`

export const CartItemsIndicator = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: red;
  color: white;
  width: 24px;
  height: 24px;
  font-size: 13px;
`