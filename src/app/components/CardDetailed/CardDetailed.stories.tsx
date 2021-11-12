import React from 'react';
import CardDetailed from './CardDetailed';

export default {
  title: 'Component/CardDetailed',
  component: CardDetailed,
};

export const standard = (): JSX.Element => (
  <CardDetailed
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    cardTags={['coolest']}
  ></CardDetailed>
);
