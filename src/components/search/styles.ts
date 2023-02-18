import styled from "styled-components";

export const StyledForm = styled.form`
  width: calc(100% - 20px);
  margin: 0 auto;
  position: relative;
`;

export const StyledInput = styled.input`
  width: calc(100% - 100px);
  border: none;
  height: 30px;
  margin-left: 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const StyledButton = styled.button`
  width: 100px;
  background-color: #f9ad03;
  border: none;
  height: 30px;
  border-radius: 30px;
  margin-right: 7px;
  color: #fff;
  cursor: pointer;
`;

export const StyledSearchImage = styled.img`
  margin-left: 8px;
`;
