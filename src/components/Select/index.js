import React from 'react';
import {
  ContainerSelect,
  DescriptionSelect,
  List
} from './styles';

function Select({ label, options, description, ...otherProps }) {
  
  return (
    <ContainerSelect>
     
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} selected="">
        <option disabled value="">{description}</option>
        {options.map(option => <option
          key={option.id}
          value={option.id}>
          {option.name}
        </option>
        )}
      </List>
    </ContainerSelect>
  );
}

export default React.memo(Select);