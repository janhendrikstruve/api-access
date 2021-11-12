import React from 'react';
import Card from '../..//components/Card/Card';
import type { Thing } from '../../types';
import useFetch from '../../components/hooks/useFetch';

export default function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

  return (
    <main>
      <h1>moin</h1>
      {things &&
        things.map((thing) => (
          <Card
            id={thing.id}
            key={thing.id}
            title={thing.name}
            description={thing.description}
          ></Card>
        ))}
    </main>
  );
}
