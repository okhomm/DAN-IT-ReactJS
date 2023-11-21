import { ItemList, StyledTopMenuItem, StyledTopMenuLink } from './TopMenuStyles'

const TopMenu = () => {
  return (
    <ItemList>
      <StyledTopMenuItem>
        <StyledTopMenuLink to="/shop">Shop</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink to="/shop/man">Man</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink to="/shop/woman">Woman</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink to="/shop/combos">Combos</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink to="/shop/joggers">Joggers</StyledTopMenuLink>
      </StyledTopMenuItem>
    </ItemList>
  )
}

export default TopMenu
