import React from 'react';
import {
  ContainerSelect,
  List
} from './styles';

function Select({ options, description, ...otherProps }) {
  
  return (
    <ContainerSelect>
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