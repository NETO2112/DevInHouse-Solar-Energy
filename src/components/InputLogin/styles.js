import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginBottom};
  border: 1px solid ${(props) => props.errorMessage ? '#ff0000' : '#aaa'};
  border-radius: 5px;
  svg {
    margin: 23px 0 0 10px;
  }
`;

export const SubContainerInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputText = styled.input`
  width: 290px;
  height: 30px;
  outline: none;
  border: none;
  margin: 16px 0 0 10px;
  margin-bottom: ${(props) => props.errorMessage ? '0px' : '16px'};
  &:focus {
    border-color: #000;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 10px;
  margin: 0 10px;
`;