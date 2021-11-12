import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetailed from '../../components/CardDetailed/CardDetailed';
import type { Thing } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function Stuff(): JSX.Element {
  const navigate = useNavigate();
  const { chosenThing } = useParams();
  const [thing, setThings] = useState<Thing | null>(null);

  useEffect(() => {
    async function fetchedthings() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${chosenThing}`
      );
      if (!response.ok) return;
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchedthings();
  }, []);

  function navigateBack(event: { preventDefault: () => void }) {
    event.preventDefault();
    navigate('/');
  }

  if (thing) {
    return (
      <>
        <button onClick={navigateBack}>Back</button>
        <CardDetailed
          id={thing.id}
          key={thing.id}
          title={thing.name}
          description={thing.description}
          cardTags={thing.categories}
        ></CardDetailed>
      </>
    );
  } else {
    return <></>;
  }
}
