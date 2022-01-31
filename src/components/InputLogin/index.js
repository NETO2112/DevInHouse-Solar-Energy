import React from 'react';
import { ContainerInput, InputText, ErrorMessage } from './styles';

function InputLogin({ marginBottom, errorMessage, ...otherProps }) {
  return (
    <ContainerInput marginBottom={marginBottom}>
      <InputText
        {...otherProps}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage> 
    </ContainerInput>
  );
}

export default  React.memo(InputLogin);