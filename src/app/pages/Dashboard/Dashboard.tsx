import React from 'react';
import Card from '../..//components/Card/Card';
import type { Thing } from '../../types';
import useFetch from '../../components/hooks/useFetch';
import styled from 'styled-components';

export default function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

  return (
    <StyledMain>
      <StyledH1>Cards</StyledH1>
      {things &&
        things.map((thing) => (
          <Card
            id={thing.id}
            key={thing.id}
            title={thing.name}
            description={thing.description}
          ></Card>
        ))}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  justify-self: center;
  border: 4px solid steelblue;
  padding: 10px 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 12px;
`;
