import React from 'react';
import { Text } from 'react-native';

import img1 from '../../assets/images/zombie.png';

import { Wrapper, Container, Title, Img, MainInfo } from './styles';

export default function Info() {
  return (
    <Wrapper>
      <Container>
        <Title>TRZ SURVIVORS</Title>
        <Img source={img1} />
        <MainInfo>
        The world, as we knew it, doesn't exist anymore. A virus known as the "Influenzer T-Virus"
        (or the Twiter Virus, however you want to call it) is transforming human beings into living-dead
        beasts hungry to cancel humans and eat their limbs. But don't worry, they're doing just fine, they're
        just kinda dead now. But if you're capable of reading this, it means you're not one of them. And if
        you're not one of them, then we NEED you. We, as survivors, made a resistance group so we can keep up
        with all the information that is valuable for all of us. Like who's alive and who's dead, what kind of
        items everyone has, the location of our living people and all this stuff. Please, keep this app
        updated. It was developed by a smart, humble and very deserving of a career in mobile development
        developer. So honor his memorie (or life, we haven't heard of him in a while so we don't really know)
        and connect to the others survivors.
        </MainInfo>
      </Container>
    </Wrapper>
  );
}
