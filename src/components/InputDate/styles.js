import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  margin-top: 10px;
  width: 200px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ced4da;
  font-size: 16px;
  padding: 10px;
  &:focus {
    border-color: #4CBC9A;
  }
`;
