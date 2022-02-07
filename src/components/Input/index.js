import React from 'react';

import { ContainerInput, DescriptionInput, InputText } from './styles';

function Input({ label, flexBasis, ...otherProps }) {
  return (
    <ContainerInput flexBasis={flexBasis}>
     <DescriptionInput>{label}</DescriptionInput>
      <InputText
        {...otherProps}
      />
    </ContainerInput>
  );
}

export default  React.memo(Input);