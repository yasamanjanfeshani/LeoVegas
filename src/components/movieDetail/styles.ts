import styled from "styled-components";

export const StyledMovieBanner = styled.div`
  width: calc(100% - 20px);
  height: auto;
  background-color: #ccc;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledPoster = styled.img`
  border-radius: 20px;
`;

export const StyledOverview = styled.div`
  border-radius: 20px;
`;

export const StyledTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

export const StyledDescription = styled.p`
  font-size: 15px;
`;
