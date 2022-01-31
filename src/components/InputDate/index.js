import React from 'react';
import ReactDatePicker from 'react-datepicker';

import { 
   ContainerInput, 
   DescriptionInput, 
   InputText,
   ErrorMessage
   } from './styles';

function InputDate({ label, errorMessage, ...otherProps }) {
  return (
    <ContainerInput>
     <DescriptionInput>{label}</DescriptionInput>
     <ReactDatePicker
       {...otherProps}
       customInput={<InputText errorMessage={errorMessage}/>}
    />
      <ErrorMessage>{errorMessage}</ErrorMessage> 
    </ContainerInput>
  );
}

export default React.memo(InputDate);