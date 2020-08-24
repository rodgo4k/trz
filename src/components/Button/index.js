import React from 'react';
import { View, Text } from 'react-native';

import EntypoIcons from 'react-native-vector-icons/Entypo';

import { Button, Label } from './styles';

export default function MainButton({ focused }) {
  return (
      <Button 
        colors={
          focused
            ? ['#3499FF', '#3A3985']
            : ['#6EE2F5', '#6454F0']
    }
      >
          <EntypoIcons name="home" size={22} color="#000"/>
          <Label>Home</Label>
      </Button>
  );
}
