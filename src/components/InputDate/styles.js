import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`;

export const InputText = styled.input`
  width: 100%;
  height: 24px;
  border-radius: 2px;
  outline: none;
  border: 1px solid ${(props) => props.errorMessage ? '#dc3545' : '#ced4da'};
  padding-left: 5px;

  &:focus {
    border-color: #EC6D08;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 11px;
  margin-top: 2px;
`;