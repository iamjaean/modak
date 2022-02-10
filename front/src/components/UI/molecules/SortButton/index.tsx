import React from "react";
import styled from "styled-components";
import TriangleIcon from "@src/components/icons/TriangleIcon";

const SortButton = () => {
  return (
    <BoxArea>
      <SelectBoxWrapper>
        <DropDownSelect onChange={handleChange}>
          <DropDownOption value={"latest"} selected>
            최신순
          </DropDownOption>
          <DropDownOption value={"asc-review"}>리뷰 많은 순</DropDownOption>
          <DropDownOption value={"asc-bookmark"}>인기 많은 순</DropDownOption>
        </DropDownSelect>
        <TriangleIcon />
      </SelectBoxWrapper>
    </BoxArea>
  );
};

export default SortButton;

const handleChange = (e) => {
  console.log(e.target.value);
};
const BoxArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SelectBoxWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    right: 10px;
  }
`;

const DropDownSelect = styled.select`
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 0.5em;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const DropDownOption = styled.option``;
