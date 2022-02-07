import styled from 'styled-components';

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.select`
  background: #FFF;
  width: 250px;
  outline: 0;
  border: 1px solid #ced4da;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  &:focus {
    border-color: #4CBC9A;
  }
`;
