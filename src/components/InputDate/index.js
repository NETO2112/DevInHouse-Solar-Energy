import React from 'react';
import ReactDatePicker from 'react-datepicker';

import { ContainerInput, InputText } from './styles';

function InputDate({ errorMessage, ...otherProps }) {
  return (
    <ContainerInput>
     <ReactDatePicker
       {...otherProps}
       customInput={<InputText errorMessage={errorMessage}/>}
    />
    </ContainerInput>
  );
}

export default React.memo(InputDate);