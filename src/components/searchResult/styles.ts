import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSearchResult = styled.div`
  width: 250px;
  height: 200px;
  overflow-y: scroll;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  z-index: 99;
  padding: 10px;
  &::-webkit-scrollbar {
    height: 5px;
    width: 10px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledSearchItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  color: #333;
`;

export const StyledImageContain = styled.div`
  border-radius: 10px;
  width: 50px;
  height: 50px;
  flex: none;
`;
export const StyledTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
