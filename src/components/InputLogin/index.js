import React from 'react';
import { ContainerInput, InputText, ErrorMessage, SubContainerInput } from './styles';
import { FiLock, FiMail } from "react-icons/fi";

function InputLogin({ marginBottom, errorMessage, ...otherProps }) {
  return (
    <ContainerInput marginBottom={marginBottom} errorMessage={errorMessage}>
      <SubContainerInput>
        {otherProps.type == 'email' ? <FiLock style={{color: '#A098AE'}}/> : <FiMail style={{color: '#A098AE'}}/>}
        <InputText
          {...otherProps}
          errorMessage={errorMessage}
          />
      </SubContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage> 
    </ContainerInput>
  );
}

export default  React.memo(InputLogin);