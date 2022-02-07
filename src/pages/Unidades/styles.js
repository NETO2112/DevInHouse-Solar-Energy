import styled from "styled-components";

export const SubContainerUnidades = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;
  button{
    margin: 100px 10% 0 0;
  }
`;

export const Label = styled.div`
  margin: 100px 10% 50px;
  font-size: 28px;
  font-weight: bold;
  color: #374557;
`;

export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-collapse: collapse;
  th {
    text-align: left;
  }
  th, td {
    border-bottom: 2px solid #FAFAFA;
    padding: 4px;
  }
  td {
    color: #53575D;
  }
  button {
    margin: 0;
  }
`;

export const ButtonTable = styled.button`
  color: #fff;
  background: ${props => props.bg};
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover{
    background: ${props => props.bgh};
  }
`;

export const THead = styled.thead`
  background: #E8E8E850;
`;