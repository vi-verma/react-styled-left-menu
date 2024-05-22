// src/SearchBar.js
import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: start; */
  border-bottom: 1px solid #bcbaba;
  width: 100%;
  max-width: 400px;
  /* margin: auto; */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const Icon = styled.img`
  width: 1rem;
  margin: 0 12px;
`;

const SearchBar = ({
  onChange = () => {},
  onSearch = () => {},
  placeHolder,
}) => {
  return (
    <SearchContainer>
      <Icon
        onClick={onSearch}
        src={"/src/assets/tableBtnIcons/searchicon.png"}
        alt="Search Icon"
      />
      <SearchInput onChange={onChange} type="text" placeholder={placeHolder} />
    </SearchContainer>
  );
};

export default SearchBar;
