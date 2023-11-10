import { ItemList, StyledTopMenuItem, StyledTopMenuLink } from './TopMenuStyles';

const TopMenu = () => {
  return (
    <ItemList>
      <StyledTopMenuItem>
        <StyledTopMenuLink href="/">Shop</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink href="/">Man</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink href="/">Woman</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink href="/">Combos</StyledTopMenuLink>
      </StyledTopMenuItem>
      <StyledTopMenuItem>
        <StyledTopMenuLink href="/">Joggers</StyledTopMenuLink>
      </StyledTopMenuItem>
    </ItemList>
  )
};

export default TopMenu;
