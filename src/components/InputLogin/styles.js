import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const InputText = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: 1px solid ${(props) => props.errorMessage ? '#a50000' : '#aaa'};
  margin-bottom: ${(props) => props.errorMessage ? '0' : '15px'};
  
  &:focus {
    border-color: #000;
  }
`;

export const ErrorMessage = styled.div`
  color: #a50000;
  font-size: 11px;
  margin-top: 2px;
`;