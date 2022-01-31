import React from 'react';

import { 
   ContainerInput, 
   DescriptionInput, 
   InputText,
   ErrorMessage
   } from './styles';

function Input({ label, errorMessage, flexBasis, ...otherProps }) {
  return (
    <ContainerInput flexBasis={flexBasis}>
     <DescriptionInput>{label}</DescriptionInput>
      <InputText
        {...otherProps}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage> 
    </ContainerInput>
  );
}

export default  React.memo(Input);