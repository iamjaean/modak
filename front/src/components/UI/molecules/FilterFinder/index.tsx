import React from "react";
import styled from "styled-components";

import FilterCategory from "./FilterCategory";

const FilterFinder = () => {
  return (
    <FinderContainer>
      <FilterCategory />
      <FilterCategory />
      <FilterCategory />
      <FilterCategory />
      <ButtonContainer>
        <StyledButton>초기화</StyledButton>
        <StyledButton>검색</StyledButton>
      </ButtonContainer>
    </FinderContainer>
  );
};

export default FilterFinder;

const FinderContainer = styled.div`
  margin-top: 1em;

  /* 보더 디자인 */
  /* border: 1px solid ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR}; */

  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);

  padding: 30px 50px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
  }

  & + button {
    margin-left: 20px;
  }
`;
