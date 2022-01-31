import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;

export const InputCheckbox = styled.input`
  transform: scale(1);
`;

export const Description = styled.span`
  color: #EC6D08;
  font-weight: bold;
  font-size: 12px;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 11px;
  margin-top: 2px;
`;