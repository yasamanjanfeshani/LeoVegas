import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  width: 100%;
  background-color: #000;
  height: 52px;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  font-size: 13px;
`;
