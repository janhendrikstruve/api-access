import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type cardProps = {
  title: string;
  description: string;
  id: number;
};

export default function Card({
  title,
  description,
  id,
}: cardProps): JSX.Element {
  return (
    <section>
      <StyledLink to={`/stuff/${id}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </StyledLink>
    </section>
  );
}

const StyledLink = styled(Link)`
  display: grid;
  border: 4px solid steelblue;
  border-radius: 8px;
  background-color: lightblue;
  justify-items: center;
  padding: 10px 100px;
`;
