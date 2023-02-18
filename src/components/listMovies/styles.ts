import styled from "styled-components";

export const StyledListPopular = styled.div`
  width: calc(100% - 10px);
  margin: 0 auto;
  background-color: #000;
  padding: 10px;
  padding-right: 0;
`;

export const StyledTitle = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 10px;
  &:last-child {
    padding-right: 10px;
  }
  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
