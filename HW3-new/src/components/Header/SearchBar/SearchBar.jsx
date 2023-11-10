import Search from '../../../assets/svg/search.svg?react';
import { StyledSearchBar, StyledSearchIconBox, StyledSearchBarInput } from './SearchBarStyles';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchIconBox>
        <Search />
      </StyledSearchIconBox>
      <StyledSearchBarInput type="text" placeholder="Search" />
    </StyledSearchBar>
  )
};

export default SearchBar;
