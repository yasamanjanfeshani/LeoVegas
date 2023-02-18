import styled from "styled-components";

export const StyledVertical = styled.div`
  width: calc(100% - 20px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  padding: 5px;
  @media screen and (min-width: 375px) {
    grid-gap: 10px;
    padding: 10px;
  }

  @media screen and (min-width: 470px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: #888;
  border: none;
  color: #fff;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  margin-bottom: 30px;
`;
