import React from 'react';

import Item from '../../components/Item';

import { Wrapper, Container, Header, Pic, ProfileInfo, Name, Gender, Age, Mid, Location, At, Lat, Lon, Alive, Items, Label, ItemT, Quantity, ItemLabel, ItemsValue } from './styles';

export default function Profile() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Pic />
          <ProfileInfo>
            <Name>Rodrigo Prestes</Name>
            <Gender>Male</Gender>
            <Age>23yo</Age>
          </ProfileInfo>
        </Header>
        <Mid>
          <Location>
            <At>Last Location:</At>
            <Lat>lat</Lat>
            <Lon>lon</Lon>
          </Location>
          <Alive>ALIVE</Alive>
        </Mid>
        <Items>
          <Label>You have:</Label>
            <Item quantity="7" label="Fiji Water" />
            <Item quantity="4" label="Campbell Soup" />
            <Item quantity="5" label="First Aid Pouch" />
            <Item quantity="4" label="AK47" />
        </Items>
        <ItemsValue>
          <Label>Items' Value:</Label>
          <ItemT>
            <ItemLabel>Fiji Water: </ItemLabel>
            <Quantity>14 points.</Quantity>
          </ItemT>
          <ItemT>
            <ItemLabel>Campbell Soup: </ItemLabel>
            <Quantity>12 points</Quantity>
          </ItemT>
          <ItemT>
            <ItemLabel>First Aid Pouch: </ItemLabel>
            <Quantity>10 points</Quantity>
          </ItemT>
          <ItemT>
            <ItemLabel>AK47: </ItemLabel>
            <Quantity>8 points</Quantity>
          </ItemT>
        </ItemsValue>
      </Container>
    </Wrapper>
  );
}
