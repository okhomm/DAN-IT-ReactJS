import Search from '../../../assets/svg/search.svg?react';
import { StyledSearchBar, StyledSearchIconBox } from './SearchBarStyles';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchIconBox>
        <Search />
      </StyledSearchIconBox>
      <input type="text" placeholder="Search" />
    </StyledSearchBar>
  )
};

export default SearchBar;
