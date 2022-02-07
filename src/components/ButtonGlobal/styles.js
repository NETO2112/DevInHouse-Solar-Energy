import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  float: ${props => props.float};
  background-color: #4C5DF1;
  padding: 10px 0;
  border: 0;
  border-radius: 15px;
  color: #fff;
  &:hover{
    background: #2C3DD1;
  }
`;