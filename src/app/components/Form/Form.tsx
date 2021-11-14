import React from 'react';
import styled from 'styled-components';

type formProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<Element>;
};

export default function Form({ handleSubmit }: formProps): JSX.Element {
  return (
    <>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name" />
        name:
        <StyledInput id="name" type="text" />
        <label htmlFor="description" />
        description:
        <StyledTextarea id="description" rows={8} />
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
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: lightblue;
`;

const StyledInput = styled.input`
  width: 80%;
  border-radius: 8px;
`;

const StyledTextarea = styled.textarea`
  width: 80%;
  border-radius: 8px;
`;

const StyledButton = styled.button`
  width: 60%;
  padding: 4px;
`;
