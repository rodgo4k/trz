import React from 'react';

import { ItemContainer, Quantity, ItemLabel } from './styles';

export default function Item({ quantity, label}) {
  return (
    <ItemContainer>
      <Quantity>{quantity} </Quantity>
      <ItemLabel>{label}</ItemLabel>
    </ItemContainer>
  );
}