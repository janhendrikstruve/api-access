import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

type formProps = {
  handleSubmit: (name: string, description: string) => void;
};

export default function Form({ handleSubmit }: formProps): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(name, description);
        }}
      >
        <label htmlFor="name" />
        name:
        <StyledInput
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="description" />
        description:
        <StyledTextarea
          id="description"
          rows={8}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <StyledButton type="submit">add</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-gap: 8px;
  justify-items: center;
  border: 4px solid steelblue;
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  background-color: lightblue;
`;

const StyledInput = styled.input`
  border-radius: 8px;
`;

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  height: 100px;
  width: 200px;
`;

const StyledButton = styled.button`
  padding: 4px;
  width: 200px;
`;
