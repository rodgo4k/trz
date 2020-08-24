import React from 'react';
import { View, Text } from 'react-native';

import { Wrapper, Container } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <View>
          <Text>Home</Text>
        </View>
      </Container>
    </Wrapper>
  );
}
