import React from 'react';

import { LabelContainer, InputCheckbox, Description } from './styles';

function Checkbox({ label, errorMessage, ...otherProps }) {
  return (
    <LabelContainer>
      <InputCheckbox
        type="checkbox"
        {...otherProps}
      />
      <Description>{label}</Description>
    </LabelContainer>
  );
}

export default Checkbox;