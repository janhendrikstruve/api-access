import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const standard = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    id={1}
  ></Card>
);
