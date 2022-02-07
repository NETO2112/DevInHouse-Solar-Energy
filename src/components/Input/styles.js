import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => props.flexBasis};
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
  border-radius: 4px;
  outline: none;
  border: 1px solid #ced4da;
  padding: 5px 15px;
  margin-bottom: 10px;
  width: ${props => props.width};
  &:focus {
    border-color: #4CBC9A;
  }
`;
