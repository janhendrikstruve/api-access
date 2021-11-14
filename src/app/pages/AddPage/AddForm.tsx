import React from 'react';
import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router';

export default function AddForm(): JSX.Element {
  const nav = useNavigate();
  async function handleSubmit(name: string, description: string) {
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    nav('/');
  }

  return (
    <>
      <Form handleSubmit={handleSubmit}></Form>
    </>
  );
}
