import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Wrapper, Container } from './styles';

import Person from '../../components/Person';

export default function People({ name, age, gender, infected}) {
  return (
    <Wrapper>
      <Container>
        <Person name="John Doe" age="45" gender="Male" infected="ALIVE" />
        <Person name="Pedro Alvarez" age="25" gender="Male" infected="ALIVE" />
        <Person name="Marisa Alavrez" age="12" gender="Female" infected="ALIVE" />
        <Person name="Jennifer Patz" age="31" gender="Female" infected="ALIVE" />
        <Person name="Peter Jackson" age="26" gender="Male" infected="ALIVE" />
        <Person name="Dana Jhonson" age="40" gender="Female" infected="ALIVE" />
        <Person name="Daniella Jhonson" age="37" gender="Female" infected="ALIVE" />
        <Person name="Andrew Jhonson" age="17" gender="Male" infected="ALIVE" />
        <Person name="Zachary Morgan" age="29" gender="Male" infected="ALIVE" />
        <Person name="Bruce Dallas" age="58" gender="Male" infected="ALIVE" />
        <Person name="Maria Rosario" age="19" gender="Female" infected="ALIVE" />
        <Person name="John Patrickson" age="22" gender="Male" infected="ALIVE" />
        <Person name="Luke Willian" age="13" gender="Male" infected="ALIVE" />
        <Person name="Shawn Smith" age="33" gender="Male" infected="ALIVE" />
        <Person name="Victoria Pierce" age="20" gender="Female" infected="ALIVE" />
        <Person name="Jade Hilton" age="19" gender="Female" infected="ALIVE" />
      </Container>
    </Wrapper>
  );
}
