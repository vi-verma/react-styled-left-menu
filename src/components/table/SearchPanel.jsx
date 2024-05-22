import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
const SearchPanelWrapper = styled.div`
  /* height: 3rem; */
  margin: 4px;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.img`
  height: 1.4rem;
  margin-left: 3rem;
  /* &:nth-child(1) {
    margin: 0 8px;
  } */
`;
const SearchPanel = () => {
  return (
    <SearchPanelWrapper>
          <SearchBar placeHolder={"Search your dashboard"} />
        <div>
          <Icon
            src={"/src/assets/tableBtnIcons/toggle.png"}
            alt="Search Icon"
          />
          <Icon
            src={"/src/assets/tableBtnIcons/threeDot.png"}
            alt="Search Icon"
          />
        </div>
      </SearchPanelWrapper>
  )
}

export default SearchPanel