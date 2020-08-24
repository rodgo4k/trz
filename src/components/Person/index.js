import React from 'react';

import { PersonContainer, Left, Info, Infected, Right } from './styles';

import Item from '../Item';

export default function Person({ quantity, label, name, age, gender, infected}) {
  return (

    <PersonContainer>
          <Left>
            <Info>{name}</Info>
            <Info>{gender}</Info>
            <Info>{age}</Info>
            <Info>lat & lon</Info>
            <Infected>{infected}</Infected>
          </Left>
          <Right>
            <Item quantity="5" label="Fiji Water" />
            <Item quantity="6" label="Campbell Soup" />
            <Item quantity="5" label="First Aid Pouch" />
            <Item quantity="4" label="AK47" />
          </Right>
    </PersonContainer>
  );
}
