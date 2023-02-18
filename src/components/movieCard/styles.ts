import styled from "styled-components";

export const StyledMovieCard = styled.div`
  min-width: 150px;
  height: 250px;
  border-radius: 30px;
  background-color: #fff;
  position: relative;
  background-color: #ccc;
  @media screen and (min-width: 1024px) {
    height: 210px;
  }
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  width: 25px;
  height: 60px;
  top: 15px;
  left: 5px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledStar = styled.img`
  width: 15px;
  height: 15px;
`;
